import crypto from 'crypto'

class Misc {
  static isString (v) {
    if (typeof v === 'string') {
      return true
    }
    return false
  }

  static toJson (o) {
    try {
      return JSON.stringify(o)
    } catch (err) {
      console.log(err)
      return null
    }
  }
  static fromJson (s) {
    try {
      return JSON.parse(s)
    } catch (err) {
      console.log(err)
      return null
    }
  }

  static strToBuffer (s) {
    const len = s.length
    const buf = new ArrayBuffer(len)
    const bufView = new Uint8Array(buf)
    for (let i = 0; i < len; i++) {
      bufView[i] = s.charCodeAt(i)
    }
    return bufView
  }

  static md5 (s) {
    return crypto.createHash('md5').update(s).digest('hex')
  }

  static readContent (file, onsuccess, onerror) {
    const reader = new FileReader()
    reader.readAsText(file, 'UTF-8')
    reader.onload = onsuccess
    reader.onerror = onerror
  }

  static validateKS (file) {
    // TODO: implement validation
    console.log(file)
  }
}

export default Misc
