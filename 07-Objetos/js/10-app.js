//Unir dos objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas ={
    peso:'1kg',
    medidas:'1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

console.log(resultado);

//Spread Operator o Rest Operator
//... significa que se esta indicando que se realize una 
//copia de tal abjeto
const resultado2 = {...producto, ...medidas}

console.log(resultado2);