# Detailed Documentation

### Table of Contents

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

-----

### build

This directory contains a `contracts` directory (`/build/contracts`), which consists of the compiled version of the smart contracts specified in the `/contracts` directory. This directory and included files are generated via `truffle compile`.

### config

This directory holds the configurations for the developer's environment used to build this project.

- `eslint/`:
  - Configures how to lint (clean and organize) the JS code
  - `.eslintignore`: ignore files that match the listed description
  - `.eslintrc.js`: describe the rules used to lint the JS code
- `postcss/`:
  - `postcss.config.js`: configures plugins for PostCSS, which enables transformation of CSS with JS 
- `vue-loader/`:
  - `vue-loader.conf.js`: configure loader (preprocess files of many different types) for webpack (bundles many `.js` files together) for Vue.js applications
  - Vue.js is a framework to build a web app's UI faster
- `webpack`:
  - `index.js`: Describes how and where to bundle the files together
  - The other files describe 3 different code environments: `dev`, `test`, and `prod`

### contracts

This directory holds the Solidity (file type and programming language) files that define the smart contracts that are used in this project.

[http://solidity.readthedocs.io](http://solidity.readthedocs.io)

- `Migrations.sol`: describes the Migration smart contract and what it can do
- `Users.sol`: describes the User smart contract and what it can do

### migrations

This directory contains files that deploy the contracts (Migrations and Users) to the Ethereum network. These files are read by `truffle migrate`.

### node_modules

This directory contains the dependencies (pieces of modular, pre-built, boilerplate code) used to build this project.

### scripts

This directory contains scripts that can be run by developers to build or launch files in different environments.

- `build.js`: Bundle the files necessary for a static version of the browser client configured for production
- `check-version.js`: Checks version of node and npm for compatibility
- `dev-client.js`: Can be used to set up webpack hot reloading
- `dev-server.js`: Used to build the browser client in the development environment; sets up hot reloading, configures proxies, and serves static files
- `utils.js`: Helper functions used in the below files (webpack configurations)
- `webpack.base.conf.js`: Sets up webpack for all environment
- `webpack.dev.conf.js`: Sets up webpack for dev environment
- `webpack.prod.conf.js`: Sets up webpack for prod environment
- `webpack.test.conf.js`: Sets up webpack for test environment

### src

This directory contains the logic for the browser client.

- `assets/`: Contains CSS (styling) and images
- `components/`:
  - `user/signin/Login.vue`: HTML, CSS, and JS for the `/signin` page
  - `signup/`: Contains HTML, CSS, and JS for:
    - `Wallet.vue`: Step 1 of the `/signup` page
    - `Profile.vue`: Step 2 of the `/signup` page
    - `Signup.vue`: Success state of the `/signup` page
  - `Dashboard.vue`: HTML, CSS, and JS for the landing page
  - `Signup.vue`: Duplicate HTML, CSS, and JS for the `/signup` page
  - `UnderDevelopment.vue`: HTML, CSS, and JS for an under development page that is not currently in use
- `js/`:
  - `users.js`: Provides functions to enable interaction with the UsersContract on the blockchain from the browser client
- `lib/`: Contains helper functions to:
  - `eth.js`: Manage Ethereum keys
  - `wallet.js`: Manage Ethereum wallets
  - `storage.js`: Local storage
  - `user.js`: Abstracted User storage
  - `Misc.js`: Miscellaneous
- `modules/`:
  - `user/`:
    - `signin.js`: Contains logic for user sign in
    - `signup.js`: Contains logic for user sign up
  - `app.js`: Maps actions called in the browser client that should change the state of the data in the stores (global store of data in the browser client)
- `router/`: Defines what pages are loaded on routes specified for the browser client (e.g. `/signup` or `/signin`)
- `services/`:
  - `bigchain.service.js`: Contains configs and functions to interact with an ORM (object-relational mapping) tool that manages BigchainDB
  - `user.service.js`: Contains functions for a user to interact with BigchainDB
- `store/`: Defines the store (global store of data in the browser client) for the browser client
- `App.vue`: Top-level HTML, CSS, and JS that renders the browser client
- `main.js`: Main config that creates an app using the Vue framework and points to all of the necessary modules

### static

This directory is used to hold static files (files that can be served to an end user without having to be generated, modified, or processed). It is currently considered empty, and only includes an empty `.gitkeep` file so that the directory appears in GitHub.

### test

This directory contains tests that can be run to test the entire app: smart contracts and browser client code. The tests can be run with `truffle test`.

### other-files

- `.editorconfig`: Describes rules for writing code (spaces, trailing commas, etc.) that can be read by many text editors
- `.gitignore`: Ignore these files when pushing code to GitHub
- `DETAILED_DOCUMENTATION.md`: Contains detailed descriptions of the directories and files in this project
- `index.html`: The home page of the browser client; initially a skeleton file that is then populated with dynamic code at runtime
- `LICENSE`: Describes the license (instructions governing use or redistribution of software) that this project is released under
- `package-lock.json`: Automaticaly generated by the `npm` CLI; contains detailed information about the dependencies needed for this project
- `package.json`: Lists the dependencies needed, along with some scripts and metadata, used to build and run this project; automatically read by the `npm` CLI
- `README.md`: Contains a high-level description of the project along with important notes
- `truffle.js`: The configuration file for Truffle; Truffle is a development environment and testing framework designed to make developing for Ethereum (blockchain-based distributed computing platform that uses smart contracts) simpler; provides tools to write, test, and deploy smart contracts

### miscellaneous

- `MetaMask Chrome extension`: turns Google Chrome into an Ethereum browser, allowing websites to retrieve data from the blockchain and allowing users to securely manage identities and sign transactions
- `RPC`: Remote Procedure Call; concept that enables one computer to call a procedure of another computer; used often in distributed computing and blockchain communication
- `BigchainDB`: Software that has properties of both a blockchain and a database
- `Ethereum`: Decentralized platform that runs smart contracts
- `Smart Contract`: Protocols that allow performance of credible transactions without third parties; often run on a blockchain
- `Blockchain`: continuously growing list of records, called blocks, which are linked and secured using cryptography
