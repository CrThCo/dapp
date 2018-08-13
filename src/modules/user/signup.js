import UserService from './../../services/user.service'
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
    success: false,
    error: false
  }
}

const getters = {
  signupLoading: state => state.loading,
  signupPayload: state => state.payload
}

const actions = {
  Singup ({commit}, user) {
    commit('setApploading', true)
    commit('setSignupLoading', true)
    commit('setSignupError', false)
    UserService.signup(user).then((res) => {
      if (res.status === 200) {
        commit('setSingupSuccess', true)
      } else {
        commit('setSingupSuccess', false)
        commit('setSignupWarning', res.data)
        commit('setSignupError', true)
      }
      commit('setApploading', false)
      commit('setSignupLoading', false)
    }).catch((err) => {
      commit('setApploading', false)
      commit('setSignupLoading', false)
      commit('setSignupWarning', err.message)
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
  setSignupError (state, err) {
    state.payload.error = err
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
