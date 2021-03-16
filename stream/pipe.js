const fs = require('fs');

/******************************************
    transporte de datos en stream por pipe
*******************************************/
const streamRead = fs.createReadStream("../archivos/origen.txt");
const streamWrite = fs.createWriteStream("../archivos/destino.txt");

streamRead.pipe(streamWrite);

streamRead.on("end",()=>{console.log("proceso finalizado")});