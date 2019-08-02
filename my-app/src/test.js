//import web3  from 'web3';
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:8545"));
const address='0x05cb1d02562474795bb9c994ed2029e364dbd071';
const {interface,bytecode} = require('../compile');
console.log("interface=="+interface);
export default new web3.eth.Contract(interface,address);
