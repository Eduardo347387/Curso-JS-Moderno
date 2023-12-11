const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 
    puedePagar ? 'si esta autenticado y puede pagar'  
    : 'si autenticado, no puede pagar'
    : 'No esta autenticado');