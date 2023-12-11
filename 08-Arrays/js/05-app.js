

//Agregar elementos al inicio y al final de un arreglo

const carrito =[];

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio:400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

//FORMA INPERACTIVA 
//Al inicio
carrito.push(producto);
carrito.push(producto2)

const producto3 = {
    nombre:'Teclado',
    precio:50
}
//Al final
carrito.unshift(producto3)
console.table(carrito)