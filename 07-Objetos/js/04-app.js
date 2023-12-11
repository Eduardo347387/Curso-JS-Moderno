const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//forma anterior de hacer 
// const nombre = producto.nombre;
// console.log(nombre)

//destructuring
//sacar de una estructura
const {nombre, precio}= producto
console.log(nombre);
console.log(precio);