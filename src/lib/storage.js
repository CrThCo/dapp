class Storage {
  static prefix = 'connect'
  static key (k) {
    return `${Storage.prefix}_${k}`
  }
  static setItem (k, v) {
    return localStorage.setItem(Storage.key(k), v)
  }
  static getItem (k) {
    return localStorage.getItem(Storage.key(k))
  }
}

export default Storage
