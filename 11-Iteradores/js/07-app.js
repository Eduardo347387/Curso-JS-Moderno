const pendientes = ['Tarea','Comer', 'Proyecto','Estudiar javaScript'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas',precio:500},
    {nombre: 'Televisor',precio:100},
    {nombre: 'Tablet',precio:200},
    {nombre: 'Audifonos',precio:300},
    {nombre: 'Teclado',precio:400},
    {nombre: 'celular',precio:700}
]

//EL FOR OF ITERA SOBRE ARREGLOS

for (const pendiente of pendientes) {
    console.log(pendiente)
}

for (const producto of carrito) {
    console.log(producto)
}

