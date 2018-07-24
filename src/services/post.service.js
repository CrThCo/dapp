import APIService from '@/services/API.service'

export default class PostService {
  static save (post) {
    return APIService.post('post/save', post)
  }

  static all () {
    return APIService.get('post/all')
  }
}
