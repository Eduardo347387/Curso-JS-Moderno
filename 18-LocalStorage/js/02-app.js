//OBTENIENDO LOS DATOS ALMACENADOS EN LOCALSTORAGE
// getItem para obtener el valor este recibe la llave
const nombre = localStorage.getItem('nombre')

console.log(nombre)

const producto = localStorage.getItem('producto')

//Convierte el string en una objeto
console.log(JSON.parse(producto))

const meses = localStorage.getItem('meses')
console.log(JSON.parse(meses))