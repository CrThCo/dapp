import Misc from '@/lib/misc'
import Wallet from '@/lib/wallet'
import UserService from '@/services/user.service'
import StorageService from '@/services/storage.service'

const state = {
  loading: false,
  payload: {
    method: null,
    data: {
      auth: '',
      message: ''
    }
  },
  error: false
}

const getters = {
  signinLoading: state => state.loading,
  signinPayload: state => state.payload,
  signinError: state => state.error
}

const actions = {
  doSignout ({commit}) {
    StorageService.setUserToken('--null--')
    commit('setAuthenticated', false)
  },
  doSignin ({commit}, user) {
    commit('setSigninLoading', true)
    commit('setDefaultPayload')
    UserService.signin(user).then(res => {
      if (res.status === 200) {
        if (res.data.token !== undefined) {
          StorageService.setUserToken(res.data.token)
          commit('setAuthenticated', true)
          commit('setSigninPayload', {
            data: {
              auth: 'success',
              message: 'Authentication successful!'
            }
          })
        } else {
          commit('setSigninWarning')
        }
      } else {
        commit('setSigninWarning')
      }
      commit('setSigninLoading', false)
    }).catch(() => {
      commit('setSigninWarning')
      commit('setSigninLoading', false)
    })
  },
  readKeystoreContent ({commit}, file) {
    Misc.readContent(file, (e) => {
      console.log(e.target.result)
    }, (error) => {
      console.log(error)
    })
  },
  signin ({commit}, payload) {
    commit('setApploading', true)
    commit('setSignin')
    setTimeout(function () {
      console.log(payload)
      const method = payload.method
      switch (method) {
        case 'ks':
          const res = Wallet.decrypKeystore(payload.data, payload.password)
          console.log(res)
          break
        case 'pk':
          break
        default:
          console.log('Invalid method!')
      }
    }, 100)
  }
}

const mutations = {

  setSigninWarning (state) {
    state.payload = {
      data: {
        auth: 'warn',
        message: 'Invalid email or password!'
      }
    }
  },
  setSigninLoading (state, loading) {
    state.loading = loading
  },
  setSigninPayload (state, payload) {
    state.payload = payload
  },
  setDefaultPayload (state) {
    state.payload = {
      data: {
        auth: '',
        message: ''
      }
    }
  },
  setSignin (state) {
    state.loading = true
    state.error = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
