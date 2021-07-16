const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en cosnola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Establece limite hasta donde se quiere multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un nuemro";
    }
    return true;
  }).argv;


module.exports = argv