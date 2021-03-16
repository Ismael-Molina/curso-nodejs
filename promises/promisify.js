/******************************************
    promisify - callbacks to promise
*******************************************/
const fs = require('fs');
const util = require('util');

const writeFilePromise = util.promisify(fs.writeFile);
writeFilePromise("./archivos/origen.txt","1234")
                .then(()=>console.log("ok"))   
                .catch(()=>console.log("error"));