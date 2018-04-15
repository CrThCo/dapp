// import keythereum from 'keythereum'
import EthWallet from 'ethereumjs-wallet'

export default class Wallet {
  static generate () {
    return EthWallet.generate(true)
  }

  static export (privateKey, password) {
    const wallet = EthWallet.fromPrivateKey(privateKey)
    const fileName = wallet.getV3Filename()
    console.log(fileName, password)
    const keystore = wallet.toV3String(password, {})
    return {
      name: `${fileName}.json`,
      content: keystore
    }
  }
}
