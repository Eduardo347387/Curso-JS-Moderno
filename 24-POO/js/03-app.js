class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

// Herencia 
// Empresa es una clase hijo de cliente
// en el cual se heredan todos los metodos 
// atributos y constructor
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        // super trae esos atributos a herendar de clientes
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria =  categoria;        
    } 
    // La clase padre tiene un funcion igual
    // como volvemos a reescribir otra aqui lo que hace es
    // tomar esta e ignorar la otra 
    static bienvenida(){ // reescribir un metodo 
        return `Bienvenido al cajero de empresa`
    }
}


const juan = new Cliente('juan',400);
const empresa = new Empresa('Codigo con juan',500,7711833130,'aprendizaje el linea');
console.log(empresa)
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida())
console.log(Cliente.bienvenida())