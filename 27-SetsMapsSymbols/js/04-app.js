// Un symbol simpre va a se unico 

const sym = Symbol();
const sym1 = Symbol()

if(sym === sym1){
    console.log('son iguales')
}else{
    console.log('son diferentes')
}

const nombre =      Symbol();
const apellido =    Symbol()

const persona = {}

// Agregar nombre y apellido como llaves del objeto

persona[nombre] = 'juan';
persona[apellido] = 'hernandez'
persona.tipoCliente = 'Premium'
persona.saldo = 500

console.log(persona)
console.log(persona[nombre])


// Las propiedades que utilizar un symbol no son iterables

for (const i in persona) {
    console.log(i)
}

// definir una descripcion del symbol

const nombreCliente = Symbol('NOMBRE DEL CLIENTE')
const cliente = {};

cliente[nombreCliente] = 'pedro';


console.log(cliente)
console.log(cliente[nombreCliente])
console.log(nombreCliente)