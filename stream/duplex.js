const fs = require('fs');
const {Duplex} = require('stream');

/******************************************
            duplex - analisis de datos
*******************************************/
const streamRead = fs.createReadStream("../archivos/origen.txt");
const streamWrite = fs.createWriteStream("../archivos/destino.txt");

const report = new Duplex({
    write(data, encode, callback) {
        console.log(data);
        callback();
    },
    read(size){}
});

streamRead.pipe(report).pipe(streamRead);