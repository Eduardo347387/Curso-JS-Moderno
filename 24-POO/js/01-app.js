
// class declaration
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInfomracion(){
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente('juan',400);
console.log(juan.mostrarInfomracion())
console.log(juan)

// las funciones static no requieren una instancia 
// para mandarse a llamar si no que se mandan a llamar
// desde la clase

console.log(Cliente.bienvenida());





//class exprecion 
const Cliente2 = class{
    constructor(nombre,saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInfomracion(){
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }
}

const juan2 = new Cliente2('juan2',400);
console.log(juan2)
console.log(juan2.mostrarInfomracion())