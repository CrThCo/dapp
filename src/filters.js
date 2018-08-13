import Vue from 'vue'
import moment from 'moment'

const toLocalTime = (timestamp) => {
  return moment(timestamp).fromNow()
}

export default {
  install (vue) {
    Vue.filter('toLocalTime', toLocalTime)
    Vue.filter('toImageUrl', (img) => {
      return `http://localhost:8030/file/${img}`
    })
  }
}
