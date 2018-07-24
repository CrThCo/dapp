import Vue from 'vue'
import moment from 'moment'

const toLocalTime = (timestamp) => {
  return moment(timestamp).fromNow()
}

export default {
  install (vue) {
    Vue.filter('toLocalTime', toLocalTime)
  }
}
