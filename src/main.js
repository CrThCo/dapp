// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Web3 from 'web3'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import App from './App'
import router from './router'
import store from './store'
import filters from './filters'

import GenerateWallet from '@/components/user/signup/Wallet'
import ProfileBuilder from '@/components/user/signup/Profile'
import SignupForm from '@/components/user/signup/SignupForm'
import TweetForm from '@/components/post/Twitter'
import PostList from '@/components/post/List'

// CSS
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/app.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(filters)
Vue.component('icon', Icon)
Vue.component('GenerateWallet', GenerateWallet)
Vue.component('ProfileBuilder', ProfileBuilder)
Vue.component('SignupForm', SignupForm)
Vue.component('TweetForm', TweetForm)
Vue.component('PostList', PostList)

window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    console.log('Web3 injected browser: OK.')
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    console.log('Web3 injected browser: Fail. You should consider trying MetaMask.')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})

