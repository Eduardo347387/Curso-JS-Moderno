const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .every este retorna true
// si todos lo elemento
// de arreglo cumplen con la condicion
//y false si no cumple

//El precio de los productos es menor a 1000
const resultado = carrito.every(producto => producto.precio < 1000)
console.log(resultado);

//Existe un producto con un precio de menor o igual a 500
const resultado2 = carrito.some(producto => producto.precio <=500)
console.log(resultado2)