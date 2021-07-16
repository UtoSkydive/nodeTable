const fs = require('fs')
const createFileP = async ( base )=>{
    console.log('==================')
    console.log('Suma de el ' + base)
    console.log('==================')
    let output = '';
    for (let i = 1; i < 10; i++) {
        output += `${base} + ${i} = ${base + i}\n`
        
    }
    console.log(output)
    return `tablaSuma${base}.txt`
}
module.exports ={
    createFileP,
}
