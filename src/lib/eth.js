import * as keythereum from 'keythereum'

class Eth {
}

class KeyPair {
  constructor () {
    this.createParams = {
      keyBytes: 32, ivBytes: 16
    }

    this.dumpOptions = {
      kdf: 'pbkdf2',
      cipher: 'aes-128-ctr',
      kdfparams: {
        c: 262144,
        dklen: 32,
        prf: 'hmac-sha256'
      }
    }
  }
  create () {
    this.dk = keythereum.create(this.createParams)
  }
  dump (password, kdf = 'pbkdf2') {
    return keythereum.dump(password, this.dk.privateKey, this.dk.salt, this.dk.iv, this.dumpOptions)
  }

}

export default {
  Eth,
  KeyPair
}
