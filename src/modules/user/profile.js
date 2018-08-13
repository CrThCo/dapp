import UserService from '@/services/user.service'
import StorageService from '@/services/storage.service'
const initialState = {
  loading: false,
  data: null,
  message: {
    type: null,
    text: null
  }
}
const state = initialState

const getters = {
  profileState: state => state
}

const actions = {
  GetProfileInfo ({commit}) {
    const userid = StorageService.getUserId()
    commit('resetProfileData')
    commit('setProfileLoading', true)

    UserService.getProfile(userid).then(r => {
      if (r.status === 200) {
        commit('setProfileData', r.data)
      }
      commit('setProfileLoading', false)
    })
  }
}

const mutations = {
  setProfileLoading (state, loading) {
    state.loading = loading
  },
  setProfileData (state, data) {
    state.data = data
  },
  setProfileMessage (state, message) {
    state.message = message
  },
  resetProfileData (state) {
    state = initialState
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
