const dinero = 600;
const totalApagar = 500;
const tarjeta = false;
const cheque = false;

if(dinero >= totalApagar){
    console.log('Si podemos pagar');
}else if(cheque){
    console.log('Si tengo cheque')
}else if(tarjeta){
    console.log('Si puedo pagar porque tengo tarjeta')
}
else{
    console.log('Fondos Insuficientes');
}
