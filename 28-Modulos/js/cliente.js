
// // estes un forma de hacer que esta variable se ha local 
// (function(){
//     console.log('desde un IIFE');
//     const nameClient = 'juan'

//     //para hacer que se ha un variable global o que se mande a llamar a ala ventana principal
//     // window.nameClient  = 'juan'
// })();

// otra forma es expontandolo es decir sacando la variable, clase, funcion
// impotante a donde vayamos a importar esta variable debe de tener el type module  <script src="js/app.js" type="Modules"></script>
export const nameClient = 'eduardo'
export const balance = 2000;


// Expontado funciones

export function getInfo(nameClient,balance){
    return `${nameClient} tiene un balance de ${balance}`
}

export function checkBalance(balance){
    if(balance > 0){
        console.log(`${nameClient} does it have a balance in your account`)
    }else{
        console.log(`${nameClient} no balance in your account`)
    }
} 

// export defaul
// this can only exits as one there cannot be two defaul export

export default function newFuncion(){
    console.log('this is in function with default export')
}


// EXPORTING A CLASS
export class Client{
    constructor(nameClient,balance){
        this.nameClient =  nameClient
        this.balance = balance
    }

    getInfo(){
        return `${this.nameClient} has in balance of ${this.balance}`
    }
}

