import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/modules/app'
import signup from '@/modules/user/signup'
import signin from '@/modules/user/signin'
import profile from '@/modules/user/profile'
import post from '@/modules/post/post'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    signup,
    signin,
    profile,
    post
  }
})
