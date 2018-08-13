import Vue from 'vue'
import Router from 'vue-router'
import UserService from '@/services/user.service'
import Dashboard from '@/components/Dashboard'
// import UnderDevelopment from '@/components/UnderDevelopment'
import Signup from '@/components/user/signup/Signup'
import Login from '@/components/user/signin/Login'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Login
    },
    {
      path: '/',
      redirect: 'signin'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth)
  const authed = UserService.isAuthenticated()
  if (authRequired && !authed) {
    next('/signin')
  } else {
    next()
  }
})

export default router
