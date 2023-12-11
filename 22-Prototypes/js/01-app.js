// Objeto literal
// ESTE ES ESTATICO

const cliente = {
    nombre: 'juan',
    saldo: 500
}

console.log(cliente)


//CONTRUCTOR 
// ESTE ES MAS DINAMICO
function Cliente(nombre,saldo){
    this.nombre = nombre
    this.saldo= saldo
}

const juan = new Cliente('juan',500)
console.log(juan)

