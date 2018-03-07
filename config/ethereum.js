import config from './env';
import web3 from 'web3';
import tx from 'ethereumjs-tx';

export function sendRaw(rawTx) {
  const privateKey = new Buffer(config.ethereum.key, 'hex');
  const transaction = new tx(rawTx);
  transaction.sign(privateKey);
  const serializedTx = transaction.serialize().toString('hex');
  web3.eth.sendRawTransaction(
    '0x' + serializedTx,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
};
