import {Ed25519Keypair} from 'bigchaindb-driver'
import BigchainService from './bigchain.service'
import Misc from './../lib/misc'

export default class UserService {
  constructor (user) {
    this.user = user
    this.bdbService = new BigchainService()
    this.buildKP()
  }
  createProfile (asset) {
    return this.bdbService.makeTransaction(asset)
    // this.bdbService.signTransaction()
    // return this.bdbService.sendTx()
  }
  buildKP () {
    const buffer = Misc.strToBuffer(this.user)
    this.kp = new Ed25519Keypair(buffer)
    this.bdbService.setUser(this.user, this.kp)
  }
  getKP () {
    return this.kp
  }
}
