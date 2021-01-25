//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base,limite=10)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            return reject('No es un numero');
        }
        console.log('========================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('========================='.green);

        for (let j = 1; j <= limite; j++) {
           console.log(`${base} * ${j} = ${base * j}`);          
        }
    })
      
}

let crearArchivo=(base,limite=10)=>{
   return new Promise ((resolve,reject)=>{
       if(!Number(base)){
           return reject ('No es un numero');
       }
    let data= '';

    for(let i =1; i<=limite; i++){
        data+= `${base} * ${i} = ${base*i} \n`;
    }
    


    fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
       else resolve(`tabla-${base}-al-${limite}.txt`);
    });
   })
};

module.exports = {
    crearArchivo,
    listarTabla
}
