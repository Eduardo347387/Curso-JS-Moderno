const carrito =[];

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio:400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre:'Teclado',
    precio:50
}

const producto4 = {
    nombre:'Laptop',
    precio:5000
}




carrito.push(producto);
carrito.push(producto2)
carrito.push(producto3);
carrito.push(producto4);

console.table(carrito)
//Eliminar un elemento en especifico
carrito.splice(1,1)
//Recibe donde inicia y donde terminara de eliminar

console.table(carrito)



// //eliminar el ultimo elemento de un arreglo
// carrito.pop()
// console.table(carrito)

// //Eliminar el primer elemento del arreglo
// carrito.shift();
// console.log(carrito);