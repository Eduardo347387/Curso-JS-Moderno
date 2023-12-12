const clientes = new Map()

// Agrenar un elemento al map
clientes.set('nombre', 'eduardo')
clientes.set('edad' , 12)
clientes.set('saldo', 2000)
console.log(clientes)
// Obtener el tamano del map
console.log(clientes.size)

// buscar un elemento
console.log(clientes.has('nombre'))

// Obtener un valor
console.log(clientes.get('nombre'))

// eliminar un elemento de la lista
console.log(clientes.delete('saldo'))
console.log(clientes)

// borrar todo de la lista

clientes.clear()
console.log(clientes)

const paciente = new Map([['nombre','paciente'],['cuarto','no definido']])

paciente.set('dr','Dr asignado')
paciente.set('nombre','antonio')

console.log(paciente)

paciente.forEach((datos,index)=>{
    console.log(`${index}: ${datos}`)
})