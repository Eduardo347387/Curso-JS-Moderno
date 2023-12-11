// ELIMINAR ELEMENTOS DEL DOM

// ELIMINA EL PRIMER ENLACE DE MI PAGINA WEB
// const primerElemento = document.querySelector('a')
// primerElemento.remove()

// Eliminar desde el padre...

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children[2].remove());

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2])




