// Set SU PRINCIPAL FUNCION ES ELIMINAR ELEMENTOS
// REPETIDOS DE UN ARREGLO (ARRAY) ES HACIENDO
// QUE TALES ELEMENTOS QUE COINICIDAN NO SE AGREGEN

// FORMA DE INICIALIZAR

let  carrito  =  new Set()

// forma de agregar un elemento
carrito.add('CAMISA')
carrito.add('LAVADORA')
carrito.add('Pantalla')
carrito.add('pantalla')
carrito.add('CAMISA')

//BUSCA SI EL ELEMENTO EXISTE
console.log(carrito.has('guitarra'))

// OBTENER SU NUMERO DE ELEMENTOS
console.log(carrito.size)

console.log(carrito)

// FORMA DE ELIMINAR UN ELEMENTO
carrito.delete('LAVADORA')

console.log(carrito)

// ELIMINAR TODOS LOS ELEMENTOS DE ARREGLO
carrito.clear()

// FORMA DE USAR: tienes un arreglo con elementos repetidos los cuales tienes que eliminar 
// y solo obtener elementos unicos

let numeros = [1,2,2,4,5,5,3,5,6,7,5,3,4,5,7,4,3,6,]
const newListNumber = new Set(numeros)
console.log(newListNumber)