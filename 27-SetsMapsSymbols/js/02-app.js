// Weakset solo almacena objetos solo eso 
const clientes = new WeakSet()

const cliente1 = {
    nombre:  'eduardo',
    saldo: 2000
}


const cliente2 = {
    nombre:  'Watson',
    saldo: 1000000
}

// Agregar un cliente
clientes.add(cliente1)
clientes.add(cliente2)
console.log(clientes)


// buscar un cliente 
console.log(clientes.has(cliente1))

//eliminar un cliente
clientes.delete(cliente1)
console.log(clientes)
clientes

// UNA DE LA DIFENCIAS EN SET Y WEAKSET ES QUE WEAKSET NO SE PUEDE ITERAR
// WEAK no tiene el metodo de size para obtener su tamano



