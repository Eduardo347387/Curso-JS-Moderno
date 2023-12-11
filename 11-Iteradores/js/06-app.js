// forEach
const pendientes = ['Tarea','Comer', 'Proyecto','Estudiar javaScript'];
pendientes.forEach((pendiente,i)=>console.log(`${i}.- ${pendiente}`))

const carrito = [
    {nombre: 'Monitor 27 pulgadas',precio:500},
    {nombre: 'Televisor',precio:100},
    {nombre: 'Tablet',precio:200},
    {nombre: 'Audifonos',precio:300},
    {nombre: 'Teclado',precio:400},
    {nombre: 'celular',precio:700}
]

const newArreglo = carrito.forEach((producto)=> producto.nombre);
const newArreglo2 = carrito.map((producto)=>producto.nombre);

console.log(newArreglo);
console.log(newArreglo2);