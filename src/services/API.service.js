import axios from 'axios'
import StorageService from '@/services/storage.service'

export default class APIService {
  static getUrl (endpoint) {
    return `http://myserver.local:8030/v1/${endpoint}`
  }
  static getAuthHeader () {
    return {
      Authorization: `Bearer ${StorageService.getUserToken()}`
    }
  }
  static post (endpoint, data) {
    const auth = APIService.getAuthHeader()
    const options = {
      method: 'POST',
      url: APIService.getUrl(endpoint),
      headers: {
        'Content-Type': 'application/json',
        ...auth
      },
      data: data
    }
    return axios(options).then((res) => {
      return res
    }).catch((err) => {
      return err.response
    })
  }

  static get (endpoint) {
    const auth = APIService.getAuthHeader()
    const options = {
      method: 'GET',
      url: APIService.getUrl(endpoint),
      headers: {
        'Content-Type': 'application/json',
        ...auth
      }
    }
    return axios(options).then((res) => {
      return res
    }).catch((err) => {
      return err.response
    })
  }
}
