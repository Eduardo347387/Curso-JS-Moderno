//Destructuring de objetos anidados 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: '1kg',
            medida:'1m'
        },
        fabricacion:{
            pais: 'China',
            especificaciones:{
                control: 'A1',
                pruebas: 3,
                modelo : 'A12H-B13A'
            }
        }
    }
}

const {
    informacion,informacion:{
        fabricacion,
            fabricacion:{
                pais,
                especificaciones,
                especificaciones:{
                    modelo
                }
            },
            medidas:{
                peso,
                medida
            }
        }
    }= producto

console.log(informacion)

console.log(fabricacion)
console.log(pais)

console.log(peso)
console.log(medida)

console.log(especificaciones)
console.log(modelo)

