const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Un objeto declarado con const si se puede reasignar
//ejemplo:

producto.disponible = false;
console.log(producto)

//de igual se pude eliminar propiedades de un objeto
delete producto.precio
console.log(producto)
//Un variable declarada con const no se puede reasignar
const numero = 5
// numero = 9;
// console.log(numero)