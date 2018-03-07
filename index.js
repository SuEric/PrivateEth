import web3 from 'web3';
import util from 'ethereumjs-util';
import tx from 'ethereumjs-tx';
import lightwallet from 'eth-lightwallet';
import config from '../config/env';
import { bytecode, contractInterface } from './ethereum/contracts/ballot';
import { sendRaw } from './config/ethereum';

const infuraNetwork = new web3(
  new web3.providers.HttpProvider(config.ethereum.provider)
);

// const gastLimit = 800000;
// const gasPrice = 20000000000;

// const rawTx = {
//   nonce: web3.toHex(web3.eth.getTransactionCount(config.ethereum.address)),
//   gasLimit: web3.toHex(gastLimit),
//   gasPrice: web3.toHex(gasPrice),
//   data: bytecode + '0000000000000000000000000000000000000000000000000000000000000003'
// };

// sendRaw(rawTx);

// const gastLimit = 800000;
// const gasPrice = 20000000000;

// const txOptions = {
//   nonce: web3.toHex(web3.eth.getTransactionCount(config.ethereum.address)),
//   gasLimit: web3.toHex(gastLimit),
//   gasPrice: web3.toHex(gasPrice),
//   to: config.ethereum.address,
// };
// const txutils = lightwallet.txutils;
// const voteTx = txutils.functionTx(interface, 'vote', [4], txOptions);
// sendRaw(voteTx);
