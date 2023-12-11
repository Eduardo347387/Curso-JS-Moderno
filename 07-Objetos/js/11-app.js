const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} 
        tiene un precio de: ${this.precio}`)
    }
}

const producto1 = {
    nombre: "Tablet",
    precio: 800,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} 
        tiene un precio de: ${this.precio}`)
    }
}

//this es una forma de referirse al objeto
//en si mismo de esta forma se puden 
//aceder a sus valores

producto.mostrarInfo()
producto1.mostrarInfo()
