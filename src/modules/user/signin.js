import Misc from './../../lib/misc'
const state = {
  loading: false,
  payload: {
    method: null,
    data: {}
  },
  error: false
}

const getters = {
  signin_loading: state => state.loading,
  signin_payload: state => state.payload,
  signin_error: state => state.error
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
    commit('setApploading', true)
    commit('setSignin')
    const method = payload.method
    switch (method) {
      case 'ks':
        if (payload.ks) {

        } else if (payload.pk) {

        }

        break
      case 'pk':
        break
      default:
        console.log('Invalid method!')
    }
  }
}

const mutations = {
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
