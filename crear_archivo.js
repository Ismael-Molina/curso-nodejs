const fs = require('fs');
const { arch } = require('os');
const archivo = fs.createWriteStream("archivo.txt");

for(let i=0;i<=1e6;i++){
    archivo.write("aksasssssssssssssssssssssssssssssssssskaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

archivo.end();