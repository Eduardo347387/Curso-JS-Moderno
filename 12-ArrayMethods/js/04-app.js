const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
//Obtener lo productos que tengas un precio mayor a 400
resultado = carrito.filter(producto => producto.precio > 400);
resultado = carrito.filter(producto => producto.precio < 600)
// Nota este crea un nuevo arreglo con la condicion
// que estes revisando en ese momento
console.log(resultado)

//Quitar los audifonos de un arreglo
resultado = carrito.filter(producto => producto.nombre!== 'Audifonos')

console.log(resultado)

resultado = carrito.filter(producto => producto.nombre === 'Audifonos')
console.log(resultado)
