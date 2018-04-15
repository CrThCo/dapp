import bigchain from 'bigchaindb-driver'
import BigchainService from './bigchain.service'
import Misc from './../lib/misc'

export default class UserService {
  constructor (user) {
    this.user = user
    this.bdbService = new BigchainService()
    this.buildKP()
  }
  createProfile (asset) {
    this.bdbService.makeTransaction(asset)
    this.bdbService.signTransaction()
    this.bdbService.sendTx().then((tx) => {
      console.log(tx)
    })
  }
  buildKP () {
    const buffer = Misc.strToBuffer(this.user)
    this.kp = bigchain.Ed25519Keypair(buffer)
    this.bdbService.setUser(this.kp, this.user)
  }
  getKP () {
    return this.kp
  }
}
