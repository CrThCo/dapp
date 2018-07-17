import router from '@/router/index.js'
import Misc from '../../lib/misc'

const state = {
  loading: false,
  payload: {
    method: null,
    data: {}
  },
  error: false
}

const getters = {
  signinLoading: state => state.loading,
  signinPayload: state => state.payload,
  signinError: state => state.error
}

const actions = {
  readKeystoreContent ({commit}, file) {
    Misc.readContent(file, (e) => {
      console.log(e.target.result)
    }, (error) => {
      console.log(error)
    })
  },
  signin ({commit}, payload) {
    commit('setAppLoading', true)
    const method = payload.method
    switch (method) {
      case 'ks':
        console.log('logging in via ks file')
        // TODO: verify valid ks file, else return
        // localStorage.setItem('connectToken', payload.data)
        break
      case 'ksc':
        console.log('logging in via ks content')
        // TODO: verify valid ks content, else return
        // localStorage.setItem('connectToken', payload.data)
        break
      case 'pk':
        console.log('logging in via pk')
        // TODO: verify valid pk, else return
        // localStorage.setItem('connectToken', payload.pk)
        if (window.web3.eth.accounts[0]) {
          localStorage.setItem('connectToken', window.web3.eth.accounts[0])
        }
        break
      default:
        console.log('invalid method')
        commit('setAppLoading', false)
        return
    }
    commit('authenticate')
    commit('setAppLoading', false)
    router.replace('/home')
  }
}

const mutations = {
  signinMutation (state) {
    console.log('signinMutation')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
