const driver = require('bigchaindb-driver')

const alice = new driver.Ed25519Keypair()
const conn = new driver.Connection(
    'https://test.bigchaindb.com/api/v1/',
    {
        app_id: '887e76d1',
        app_key: '0952039621ecd2a3dff7e3cde169a57c'
      })
const tx = driver.Transaction.makeCreateTransaction(
    { message: 'this is test message' },
    null,
    [ driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(alice.publicKey))],
    alice.publicKey)
const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
conn.postTransactionSync(txSigned)
