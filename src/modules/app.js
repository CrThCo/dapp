
const state = {
  loading: false,
  payload: {
    authenticated: false
  },
  error: false
}

const getters = {
  appLoading: state => state.loading,
  appPayload: state => state.payload,
  appError: state => state.error
}

const actions = {
  AppLoading ({commit}, payload) {
    commit('setAppLoading', payload)
  },
  AppPayload ({commit}, payload) {
    commit('setAppPayload', payload)
  },
  appError ({commit}, payload) {
    commit('setAppError', payload)
  }

}

const mutations = {
  setAuthenticated (state, auth) {
    state.payload.authenticated = auth
  },
  setApploading (state, payload) {
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
