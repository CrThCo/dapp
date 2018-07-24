import download from 'downloadjs'
import Wallet from './../../lib/wallet'
import User from './../../lib/user'
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
    message: {
      type: '',
      text: ''
    },
    data: null,
    success: false
  },
  error: false
}

const getters = {
  signupLoading: state => state.loading,
  signupPayload: state => state.payload,
  signupError: state => state.error
}

const actions = {
  Singup ({commit}, user) {
    commit('setApploading', true)
    commit('setSignupLoading', true)
    UserService.signup(user).then((res) => {
      if (res.status === 200) {
        commit('setSingupSuccess', true)
      } else {
        commit('setSingupSuccess', false)
      }
      console.log(res)
      commit('setApploading', false)
      commit('setSignupLoading', true)
    }).catch((err) => {
      console.log(err)
      commit('setApploading', false)
      commit('setSignupLoading', true)
    })
  },
  signupStep1 ({commit}, password) {
    commit('setApploading', true)
    commit('setStep1')
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
  setSignupLoading (state, loading) {
    state.loading = loading
  },
  setSingupSuccess (state, status) {
    state.payload.success = status
  },
  setSignupWarning (state, text) {
    state.payload.message = {
      type: 'warn',
      text: text
    }
  },
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
