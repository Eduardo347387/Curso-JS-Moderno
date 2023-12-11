//Queremos replazar una parte
//de la cadena de texto

const producto = 'Monitor 20 pulgadas';
console.log(producto);
console.log(producto.replace('pulgadas', '""'))

// .slice para cortar un fragmento del texto
console.log(producto.slice(0, 10));
//console.log(producto.slice(8));
console.log(producto.slice(2,1));

//Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(8,0));


//Extraer la primer letra del nombre
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(j))
