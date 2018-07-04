# Connect DAPP

Decentralized application to identify misinformation.

## Getting Started

1. Clone the code from this repo:

```bash
git clone https://github.com/MartinResearchSociety/dapp.git
cd dapp
```

2. Install MetaMask Chrome extension and change settings to connect to local RPC (blockchain)

3. Install and run Ganache:

```bash
npm i ganache-cli
node_modules/.bin/ganache-cli
```

4. Install truffle, then compile and deploy smart contracts:

```bash
npm i -g truffle
truffle compile
truffle migrate
```

5. Launch the app:

```bash
npm install
npm start
```

6. Open `localhost:8080/` in a Chrome browser window

## Developer Notes

- `npm install` failed on node version 10.4.1. Downgraded to node version 8.11.3 for successful install.
- Did not have access to `http://nxwqoxzh26opbdkq.onion:9984` in `dapp/src/services/bigchain.service.js`. Created local test BigchainDB server following instructions from [http://github.com/bigchaindb/bigchaindb.git](http://github.com/bigchaindb/bigchaindb.git). Alternatively, can sign up and use [testnet.bigchaindb.com](testnet.bigchaindb.com).
- Password in `/signup` has 8 char length validation.

## Detailed Documentation

- [build/](/DETAILED_DOCUMENTATION.md#build)
- [config/](/DETAILED_DOCUMENTATION.md#config)
- [contracts/](/DETAILED_DOCUMENTATION.md#contracts)
- [migrations/](/DETAILED_DOCUMENTATION.md#migrations)
- [node_modules/](/DETAILED_DOCUMENTATION.md#node_modules)
- [scripts/](/DETAILED_DOCUMENTATION.md#scripts)
- [src/](/DETAILED_DOCUMENTATION.md#src)
- [static/](/DETAILED_DOCUMENTATION.md#static)
- [test/](/DETAILED_DOCUMENTATION.md#test)
- [Other Files](/DETAILED_DOCUMENTATION.md#other-files)
- [Miscellaneous](/DETAILED_DOCUMENTATION.md#miscellaneous)
