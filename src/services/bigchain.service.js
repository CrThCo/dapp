// import { Connection, Transaction } from 'bigchaindb-driver'
import Orm from 'bigchaindb-orm'
export default class BigchainService {

  constructor () {
    this.bdbOrm = new Orm(
      // TODO: might want to change in production
      'http://nxwqoxzh26opbdkq.onion:9984/api/v1/',
      {
        app_id: 'de41bf94',
        app_key: '4c13dd90815117696fb5aab82bbb8806'
      }
    )
    this.bdbOrm.define('connect', 'https://schema.org/v1/connect')
  }

  setUser (user, kp) {
    this.kp = kp
    this.user = user
  }

  makeTransaction (asset) {
    return this.bdbOrm.models.connect
      .create({
        keypair: this.kp,
        data: asset
      })
  }

  printAllTransactions () {
    this.bdbOrm.models.connect
      .retrieve()
      .then(assets => {
        console.log('assets', assets)
      })
  }
}
