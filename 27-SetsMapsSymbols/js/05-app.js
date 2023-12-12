// CREANDO UN ITERADOR

function iterador(carrito){
    let i = 0
    
    return {
        siguiente: ()=>{
            const fin = (i >= carrito.length)
            const valor = !fin ? carrito[i++] : undefined 

            return{
                fin,
                valor
            }
        }
    }
}


const carrito =  ['producto1','producto2','producto3']

const IterarCarrito = iterador(carrito)

console.log(IterarCarrito.siguiente())
console.log(IterarCarrito.siguiente())
console.log(IterarCarrito.siguiente())
console.log(IterarCarrito.siguiente())

