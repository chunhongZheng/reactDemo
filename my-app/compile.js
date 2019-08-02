var solc = require("solc");
var fs = require("fs");
var path = require('path');
const filepath=path.resolve(__dirname,'contracts','Lottery.sol');

const source=fs.readFileSync(filepath,"utf8");

console.log(solc.compile(source,1));
//console.log("solc=="+solc);

//console.log(solc.compile(source,1).contracts[':HelloWorld']);


module.exports = solc.compile(source,1).contracts[':Lottery'];
