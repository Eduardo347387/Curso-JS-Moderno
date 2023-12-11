//CORTAR ESPACION EN BLANCO DE UN STRING

const producto = '           Monitor 20 pulgadas            ';
console.log(producto);
console.log(producto.length);


//Eliminar de inicio...
// console.log(producto.trimStart());
// console.log(producto.trimEnd());
//Nota aqui solo elimina la parte final

//De esta forma se puede conseguir eliminar 
//de ambas direcciones
// console.log(producto.trimStart().trimEnd());

//De esta forma se eliminar por ambas direcciones
console.log(producto.trim())