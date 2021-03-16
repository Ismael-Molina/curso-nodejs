const fs = require('fs');

/******************************************
            write stream
*******************************************/
let contenido  = "1234567890";
const iteraciones = 15;

for (let i = 0; i < iteraciones; i++) {
    contenido+= contenido;
}

const streamEscritura = fs.createWriteStream("./archivos/archivo.txt");
streamEscritura.write(contenido,res =>{
    console.log("stream finalizado");
});
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