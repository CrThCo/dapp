import { Connection, Transaction } from 'bigchaindb-driver'
export default class BigchainService {

  constructor () {
    this.server = 'http://192.168.10.11:9984/api/v1/'
    this.bdb = new Connection(this.server)
  }
  setUser (user, kp) {
    this.kp = kp
    this.user = user
  }

  makeTransaction (asset) {
    this.tx = Transaction.makeCreateTransaction(
      asset,
      null,
      [
        Transaction.makeOutput(
          Transaction.makeEd25519Condition(this.kp.publicKey)
        )
      ],
      this.kp.publicKey
    )
  }

  signTransaction () {
    this.singed_tx = Transaction.signTransaction(this.tx, this.kp.privateKey)
  }

  sendTx () {
    return this.bdb.postTransactionSync(this.singed_tx)
  }
}
