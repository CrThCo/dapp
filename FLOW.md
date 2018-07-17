# Connect DAPP Flow

How the app currently works.

## master

Master branch.

### /signup

- User can sign up, which creates a transaction on BigchainDB
	- Transaction contains `[ { "id": "", "data": { "bio": "", "email": "", "facebook": "", "firstName": "", "lastName": "", "twitter": "", "user": "", "username": "" } } ]`
	- Not linked to a blockchain address yet
- User can generate and download a keystore, which can be used to create an account on the Ethereum blockchain (not implemented)
	- Downloaded JSON file contains `{"address": "", "crypto": { "ciphertext": "" } }`
	- `address` is the public key
	- `crypto.ciphertext` is the private key
	- values in the those fields are hexadecimal values but are not prefixed with `0x` in the file (may need to add programmatically)
	- public keys and private keys from Step 1 and Export Keystore do not match, this may be a problem

### /signin

- Form exists, but login is not implemented

## contract-dev

Branch used for dev work on contracts. Ignored BigchainDB for now, do not see how it connects to blockchain.

### /signin

- Added basic login to blockchain and redirect to home page to start work on smart contracts

### /home

- Added home page to test logic for smart contracts
