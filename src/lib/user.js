import Storage from './storage'

class User {
  static setUsername (name) {
    return Storage.setItem('username', name)
  }
  static getUsername () {
    return Storage.getItem('username')
  }
  static setAuthenticated (status) {
    return Storage.setItem('isAuthenticated', status)
  }
  static getAuthenticated () {
    return Storage.getItem('isAuthenticated')
  }
  static setUser (user) {
    return Storage.setItem('user', user)
  }

  static getUser () {
    return Storage.getItem('user')
  }
}

export default User
