//OBJECT LITERAL
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//OBJECT CONSTRUCTOR
function Producto(nombre, precio){
    this.name = nombre; 
    this.price = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas',500);
console.log(producto2);

const producto3 = new Producto('Television', 100)
console.log(producto3); 
