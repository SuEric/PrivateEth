# PrivateEth

To be added.

Questions and comments to: [development@procodific.com]

## How to Install?

1. Run `./newAccount.bash` to create at least 2 accounts (more if desired by user)
2. Open *MyGenesis.json* and replace addresses & balance under `alloc` key to create accounts with initial balances
3. Run `./init.bash [MyGenesis.json]` to create the blockchain with a given Genesis json file
4. Install [NodeJS](https://nodejs.org/en/download/) in OS X recommended to use `brew install node`
5. Run `npm install`

## Connecting to Ethereum
Run `./console.bash` to connect with the blockchain

## Running backend
Run `npm start:dev`
