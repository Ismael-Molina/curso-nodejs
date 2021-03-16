const promiseNode = require('fs').promises;
/******************************************
            promise
*******************************************/
function numRandom() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(Math.floor(Math.random()*100));
        },2000);
    })
}

async function result() {
    const nRand = await numRandom();
    console.log(`Resultado: ${nRand}`);
}

result();
/******************************************
            promise encadenada
*******************************************/
function login() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{resolve();},2000);
    })
}

function dataUser() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve();},2000);
    })
}

login().then(()=>{
    console.log("usuario autenticado");
    return dataUser();
}).then(()=>{console.log("datos de usuario")})
  .catch(()=>{console.log("error")});
     
/******************************************
            promise - copyFile
*******************************************/
fs.copyFile("./archivos/origen.txt","./archivos/destino.txt")
            .then(()=>console.log("copia termnada"))
            .catch(()=>console.log("no se pudo copiar"))
            .finally(()=>console.log("..."));