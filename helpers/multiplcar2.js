const fs = require("fs");
const CreateFile = (base = 5) => {
  return new Promise((resolve, reject) => {
    console.log("=====================");
    console.log(`Tabla de el ${base}...`);
    console.log("=====================");
    let n = 1;
    let salida = "";
    while (n < 11) {
      salida += `${base} * ${n} = ${base * n}\n`;
      n++;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
  });
};
module.exports = {
  CreateFile,
};