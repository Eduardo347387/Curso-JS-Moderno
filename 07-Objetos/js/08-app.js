"use strict"
//Modo estricto en jsvascript 
//en el cual tienen que cumplir con ciertas 
//reglas y buenas practicas en tu codigo

//ejemplo 
// x=20;
// console.log(x)
//Aqui nos marcara error 
//ya que no esta definida la variable

//Congelar un objeto para no poderlo
//modificar

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

// Esto ya tiene un comportamiento
// a cuando un variable se quiere
// reasignar

// De esta forma se puede saber 
// si un objeto esta con
console.log(Object.isFrozen(producto))



