//OBJETOS DENTRO DE OBJETOS

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
            pais: 'China'
        }
    }
}
//Como acceder 
console.log(producto.informacion.fabricacion.pais)

