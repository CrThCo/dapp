import download from 'downloadjs'
import Wallet from './../../lib/wallet'
import User from './../../lib/user'
import Misc from './../../lib/misc'
import UserService from './../../services/user.service'
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
    commit('setApploading', true)
    commit('setStep1')
    setTimeout(() => {
      const wallet = Wallet.generate()
      const pk = wallet.getPrivateKey()
      const data = {
        privateKey: pk,
        password: password
      }
      const user = Misc.md5(wallet.getPrivateKeyString())
      User.setUser(user)
      commit('step1Success', data)
      commit('setApploading', false)
    }, 100)
  },
  exportkeystore ({commit}, payload) {
    commit('setApploading', true)
    setTimeout(() => {
      console.log(payload)
      const data = Wallet.export(payload.pk, payload.password)
      download(data.content, data.name, 'text/plain')
      commit('setApploading', false)
    }, 100)
  },
  signupStep2 ({ commit }, payload) {
    commit('setApploading', true)
    commit('setStep1')
    const user = User.getUser()
    const userService = new UserService(user)
    const p = _.assign(payload, {'user': user})
    userService.createProfile(p).then((tx) => {
      p['id'] = tx.id
      commit('setStep2Success', p)
      commit('setApploading', false)
    })
  }
}

const mutations = {
  setStep1 (state) {
    state.loading = true
    state.error = false
  },
  step1Success (state, payload) {
    state.loading = false
    state.error = false
    state.payload = {
      wizard: {
        step1: false,
        step2: true,
        complete: false
      },
      data: payload
    }
  },
  setStep2 (state, payload) {

  },
  setStep2Success (state, payload) {
    state.loading = true
    state.error = false
    state.payload = {
      wizard: {
        step1: false,
        step2: false,
        complete: true
      },
      data: payload
    }
  },
  setCompleteProfile (state, payload) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
