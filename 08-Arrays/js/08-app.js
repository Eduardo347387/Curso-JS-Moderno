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
const {nombre}= producto
console.log(nombre)

//Destructurig con arreglo

const numeros = [10,20,30,40,50];
const [, , , , quinto ]= numeros;
//los espacion entre la comas equivales a nada esto para evitar variables inecesarias
console.log(quinto);

//Si se requiere los dos primeros
//elementos y el resto en una array diferente

const [primero,segundo, ...newArray]= numeros;
console.log(primero);
console.log(segundo)
console.log(newArray)

