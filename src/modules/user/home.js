import Users from '@/js/users'
import Bigchainservice from '../../services/bigchain.service.js'

const state = {
  account: localStorage.connectToken
}

const getters = {
  authenticated: state => state.account
}

const actions = {
  printContract ({commit}, payload) {
    Users.init()
    console.log(Users)
  },
  printBigchainTransactions ({commit}, payload) {
    var b = new Bigchainservice()
    b.printAllTransactions()
  },
  createPost ({commit}, payload) {
    Users.createPost(payload.post, state.account)
  }
}

const mutations = {
  authenticate (state) {
    state.account = localStorage.connectToken || null
  },
  unauthenticate (state) {
    state.account = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
