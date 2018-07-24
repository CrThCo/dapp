import APIService from './API.service'

export default class UserService {
  static signup (user) {
    return APIService.post('user/signup', user)
  }
  static signin (user) {
    return APIService.post('user/login', user)
  }
}
