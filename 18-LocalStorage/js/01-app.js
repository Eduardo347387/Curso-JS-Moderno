// LocalStorage solo almacena string por ende
// no podemos guardar arreglos ni objetos
localStorage.setItem('nombre','juan');
//                   llave     valor


//Si se tiene un objeto este se tiene que convertir a string
const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 2000
}

const productoString = JSON.stringify(producto)
localStorage.setItem('producto', productoString)

sessionStorage.setItem('edad',12)

const meses = ['enero','febrero','marzo'];
localStorage.setItem('meses',JSON.stringify(meses))

