// import

const state = {
  loading: false,
  payload: {},
  error: false
}

const getters = {
  appLoading: state => state.loading,
  appPayload: state => state.payload,
  appError: state => state.error
}

const actions = {
  logOut ({commit}, payload) {
    localStorage.removeItem('connectToken')
    commit('unauthenticate')
    commit('setSignUpInit')
    console.log('logged out')
  }
}

const mutations = {
  setAppLoading (state, payload) {
    state.loading = payload
  },
  setAppPayload (state, payload) {
    state.payload = payload
  },
  setAppError (state, payload) {
    state.error = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
