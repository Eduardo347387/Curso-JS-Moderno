const carrito = [
    {nombre: 'Monitor 27 pulgadas',precio:500},
    {nombre: 'Televisor',precio:100},
    {nombre: 'Tablet',precio:200},
    {nombre: 'Audifonos',precio:300},
    {nombre: 'Teclado',precio:400},
    {nombre: 'celular',precio:700}
]

const newArreglo = carrito.map(function(producto){
    return `producto.nombre}- Precio ${producto.precio}`
})

console.log("__________________")
const newArreglo2 = carrito.forEach(function(producto){
    return`${producto.nombre}- Precio ${producto.precio}`
})

console.log(newArreglo)
console.log(newArreglo2)

//la diferencia entre map y forEach 
//Es que map puede crear un nuevo arreglo 
//Mientras que forEach no puede