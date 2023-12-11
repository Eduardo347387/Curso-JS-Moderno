
const carrito =[];

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio:400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre:'Teclado',
    precio:50
}

//Crear un nuevo arreglo con el spread
//operator

let resultado;
//...carrito :se esta indicando que se
//esta realizando un copiar del arreglo

//FORMA DECLARATIVA
resultado = [...carrito, producto]
//despues de la coma se esta agregando
//un nuevo elemento al final de arreglo
resultado = [...resultado,producto2];

resultado = [producto3,...resultado];
//Aqui se esta agregando un producto al inicio del arreglo
console.table(resultado)

console.log(carrito)//por end carrito sigue vacio
//ya que se realizo un copia de este y se reasigno a una
//variable llamada resultado

