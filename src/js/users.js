import contract from 'truffle-contract'
// import UsersContract from '@contracts/Users.json'
import Connect from '@contracts/Connect.json'
// TODO: rename this file to app.js?

// TODO: rename to const Election?
const Users = {

  contract: null,
  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      // self.contract = contract(UsersContract)
      self.contract = contract(Connect)
      self.contract.setProvider(window.web3.currentProvider)
      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  createPost: function (data, account) {
    let self = this
    if (!self.contract) {
      console.error('contract not initializaed')
      return
    }

    self.instance.createPost(data, { from: account })
      .then(result => console.log('result', result))
      .catch(err => console.error(err))
  },

  exists: function (address) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.exists.call(
        address || window.web3.eth.defaultAccount,
        {from: window.web3.eth.accounts[0]}
      ).then(exists => {
        resolve(exists)
      }).catch(err => {
        reject(err)
      })
    })
  },

  authenticate: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.authenticate.call(
        {from: window.web3.eth.accounts[0]}
      ).then(pseudo => {
        resolve(window.web3.toUtf8(pseudo))
      }).catch(err => {
        reject(err)
      })
    })
  },

  create: function (pseudo) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.create(
        pseudo,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  destroy: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.destroy(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default Users
