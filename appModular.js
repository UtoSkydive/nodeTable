const { type } = require("os");
const { options } = require("yargs");
const { CreateFile } = require("./helpers/multiplicar");
const { createFileP } = require("./helpers/sumar");
const argv =require('./config/yargs')
const colors = require('colors')
console.clear();
// console.log(process.argv)
// console.log(argv)
// console.log('base:yargs', argv.base)
// argumentos de consola
// const [,,argumento3 = 'base = 5'] = process.argv
// const [,base = 5] = argumento3.split('=')
// console.log(argumento3)
// console.log(base)
// const base = 9;

CreateFile(argv.b,argv.l,argv.h)
  .then((nameFile) => console.log("Archivo Creado".rainbow, nameFile))
  .catch((err) => console.log(err));

// createFileP(base)
//   .then((nameFile) => console.log("Archivo Creado", nameFile))
//   .catch((err) => console.log(err));
