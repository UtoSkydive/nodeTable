const fs = require("fs");
const colors = require('colors')

const CreateFile = async (base = 5,listar=false, hasta= 10) => {
  try {
    if(listar){
      console.log("=====================".green);
      console.log(`${'Tabla de el'.red} ${colors.red(base)}...`);
      console.log("=====================".green);

    }
    let n = 1;
    let salida = ""
    let consola = "";
    while (n <= hasta) {
      salida += `${base} X ${n} = ${base * n}\n`;
      consola += `${base} ${'X'.green} ${n} ${'='.green} ${base * n}\n`;
      n++;
    }
    if(listar) console.log(consola);

    fs.writeFileSync(`./outputs/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
      throw error
  }
};
module.exports = {
  CreateFile,
};
