const fs = require('fs');
console.clear()
const base = 6
console.log('=====================')
console.log(`Tabla de el ${base}`)
console.log('=====================')
let n = 1;
let salida = '';
while (n < 11) {
    salida += `${base} * ${n} = ${base * n}\n`;
    n++
}
console.log(salida)
/* fs.writeFile( `tabla-${base}.txt`,salida,(err)=>{
    if(err) throw err;
    console.log('Archivo Creado')
}) */
fs.writeFileSync( `tabla-${base}.txt`,salida);
console.log('Tabla Creada par la base ' + base)
