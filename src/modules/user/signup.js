import download from 'downloadjs'
import Wallet from '../../lib/wallet'
import User from '../../lib/user'
import Misc from '../../lib/misc'
import UserService from '../../services/user.service'
import _ from 'lodash'

const state = {
  loading: false,
  payload: {
    wizard: {
      step1: true,
      step2: false,
      complete: false
    },
    data: null
  },
  error: false
}

const getters = {
  signupLoading: state => state.loading,
  signupPayload: state => state.payload,
  signupError: state => state.error
}

const actions = {
  signupStep1 ({commit}, password) {
    commit('setAppLoading', true)
    commit('setStep1')
    setTimeout(() => {
      const wallet = Wallet.generate()
      const pk = wallet.getPrivateKey()
      const data = {
        privateKey: pk,
        password: password
      }
      // console.log('wallet', wallet)
      // console.log('wallet.getPublicKeyString()', wallet.getPublicKeyString())
      // console.log('wallet.getPrivateKeyString()', wallet.getPrivateKeyString())
      const user = Misc.md5(wallet.getPrivateKeyString())
      User.setUser(user)
      commit('step1Success', data)
      commit('setAppLoading', false)
    }, 100)
  },
  exportkeystore ({commit}, payload) {
    commit('setAppLoading', true)
    setTimeout(() => {
      const data = Wallet.export(payload.pk, payload.password)
      // console.log('data', data)
      download(data.content, data.name, 'text/plain')
      commit('setAppLoading', false)
    }, 100)
  },
  signupStep2 ({ commit }, payload) {
    commit('setAppLoading', true)
    commit('setStep1')
    const user = User.getUser()
    const userService = new UserService(user)
    const p = _.assign(payload, {'user': user})
    userService.createProfile(p).then((tx) => {
      p['id'] = tx.id
      commit('setStep2Success', p)
      commit('setAppLoading', false)
    })
  }
}

const mutations = {
  setSignUpInit (state) {
    state.loading = false
    state.payload = {
      wizard: {
        step1: true,
        step2: false,
        complete: false
      },
      data: null
    }
    state.error = false
  },
  setStep1 (state) {
    state.loading = true
    state.error = false
  },
  step1Success (state, payload) {
    state.loading = false
    state.payload = {
      wizard: {
        step1: false,
        step2: true,
        complete: false
      },
      data: payload
    }
    state.error = false
  },
  setStep2 (state, payload) {
    //
  },
  setStep2Success (state, payload) {
    state.loading = true
    state.payload = {
      wizard: {
        step1: false,
        step2: false,
        complete: true
      },
      data: payload
    }
    state.error = false
  },
  setCompleteProfile (state, payload) {
    //
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
