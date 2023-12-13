// El arterisco es un signo de que este es generador

function *generador(){
// yeal es un forma de definit lo valores que va hacer iterados
    yield 1;
    yield 'hola mundo'
    yield true
    yield usuario = {
        nombre:'eduardo',
        saldo: 3000 +' US'
    }
}

let iterador = generador()


// console.log(iterador.next().value)
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next().value)
// // Done es igual a true Finalizo el recorrido 
// console.log(iterador.next().done)

//FORMA MAS DINAMICA DE UTILIZAR


function *generadorCarrito(carrito){
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

let carrito = ['LAVADORA','REFRIGERADOR','TELEVICION']

let iterarCarrito = generadorCarrito(carrito)
console.log(iterarCarrito.next().value)
console.log(iterarCarrito.next().value)
console.log(iterarCarrito.next().value)
console.log(iterarCarrito.next().done)


