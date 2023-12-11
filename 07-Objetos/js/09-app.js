"use strict"
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto);
//Auque freeze y seal se ve han parecidas
// con seal no podemos agregar ni eliminar
//pero si modificar los datos existentes


producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
//Saber si un objeto esta sellado
console.log(Object.isSealed(producto))
