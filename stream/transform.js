const fs = require('fs');
const {Transform} = require('stream');

/******************************************
    transform - modificación de datos
*******************************************/
const streamRead = fs.createReadStream("../archivos/origen.txt");
const streamWrite = fs.createWriteStream("../archivos/destino.txt");

streamRead.setEncoding('utf8');

const filter = new Transform({
    writableObjectMode: true,
    transform(data,encoding,callback) {
        this.push(data.toString().toUpperCase());
        callback();
    },
    final(callback) {
        callback();
    }
});

streamRead.pipe(filter).pipe(streamWrite);