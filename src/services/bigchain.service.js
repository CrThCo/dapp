import bigchain from 'bigchaindb-driver'
export default class BigchainService {

  constructor () {
    this.server = 'http://192.168.10.11:9984/api/v1/'
    this.bdb = new bigchain.Connection(this.server)
  }
  setUser (user, kp) {
    this.kp = kp
    this.user = user
  }

  makeTransaction (asset) {
    this.tx = bigchain.Transaction.makeCreateTransaction(
      asset,
      null,
      this.makeOutputs()
    )
  }

  makeOutputs () {
    return [
      bigchain.Transaction.makeOutput(
        bigchain.Transaction.makeEd25519Condition(this.kp.publicKey),
        this.kp.publicKey
      )
    ]
  }

  signTransaction () {
    this.singed_tx = bigchain.Transaction.signTransaction(this.tx, this.kp.privateKey)
  }

  sendTx () {
    return this.bdb.postTransactionSync(this.singed_tx)
  }
}
