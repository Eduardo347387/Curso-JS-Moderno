class Cliente{

    // nombre como atributo privado
    #nombre;

    setNombre(nombre){
        this.#nombre =  nombre
    }

    getNombre(){
        return this.#nombre
    }

    // constructor(nombre,saldo){
    //     this.#nombre = nombre
    //     this.saldo = saldo
    // }

    // mostrarInformacion(){
    //     return `Cliente: ${this.#nombre} tu saldo es de ${this.saldo}`
    // }

    // static bienvenida(){
    //     return `Bienvenido al cajero`
    // }
}

const juan = new Cliente('Juan',200);
juan.setNombre('juan')
console.log(juan.getNombre())
// console.log(juan.mostrarInformacion())
