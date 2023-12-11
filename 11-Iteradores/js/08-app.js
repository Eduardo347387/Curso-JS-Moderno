const automovil={
    modelo: 'Camaro',
    year: 1969,
    motor: 'v8'
}

// //Este sive para iterar objetos
// for (let propiedad in automovil) {
//     console.log(`${automovil[propiedad]}`)
// }

for(let [llave, valor] of Object.entries(automovil)){
    console.log(`${llave}: ${valor}`)
}