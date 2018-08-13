import APIService from './API.service'
import StorageService from './storage.service'
import store from '@/store'

export default class UserService {
  static signup (user) {
    return APIService.post('user/signup', user)
  }
  static signin (user) {
    return APIService.post('user/login', user)
  }

  static isAuthenticated () {
    const token = StorageService.getUserToken()
    // decoded Token
    const d = UserService.decodeJWT(token)
    console.log(d)
    if (d !== undefined) {
      if (d.exp * 1000 > new Date().getTime()) {
        store.commit('setAuthenticated', true)
        return true
      }
    }
    store.commit('setAuthenticated', false)
    return false
  }

  static decodeJWT (token) {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (err) {
      console.log(err.message)
    }
    return undefined
  }
}
