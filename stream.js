const fs = require('fs');

/******************************************
            read stream
*******************************************/
const streamRead = fs.createReadStream("./archivos/archivod.txt",{encoding:"utf-8"});

streamRead.on("open",()=>{
    console.log("abriendo archivo");
}).on("data",()=>{
    console.log("------");
}).on("close",()=>{
    console.log("archivo cerrado");
}).on("error",()=>{
    console.log("error en el archivo");
});

/******************************************
            write stream
*******************************************/
