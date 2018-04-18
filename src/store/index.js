import Vue from 'vue'
import Vuex from 'vuex'

import app from './../modules/app'
import signup from './../modules/user/signup'
import signin from './../modules/user/signin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    signup,
    signin
  }
})
