function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold'
    }else if(this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }
    return tipo
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre:${this.nombre}, Saldo:${this.saldo}, tipo Cliente:${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}

function Persona(nombre,saldo,telefono){
    //call() manda a llamar las variables que se va a heredar
    Cliente.call(this,nombre,saldo)
    this.telefono = telefono;
}

// Heredar funciones
// Object.create(Cliente.prototype) funcion para copiar el protopype
// si asignalo hacia otra funcion

// es importante que clones estas propiedade antes de 
// instanciar ya que si no es asi esto nunca se ejecutara
// esto es asi para que cuando se cree el nuevo objeto este tenga toda la informacion
Persona.prototype = Object.create(Cliente.prototype)
Persona.prototype.constructor = Cliente;

//intanciar
const eduardo = new Persona('eduardo',5000,7711833130)
console.log(eduardo)

console.log(eduardo.nombreClienteSaldo())

Persona.prototype.mostrarTelefono = function(){
    return `El tenefono de esta persona es ${this.telefono}`
}

console.log(eduardo.mostrarTelefono())
