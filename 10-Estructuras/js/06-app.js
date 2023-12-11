const usuario=true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puede comprar')
}else if(!puedePagar && !usuario){
    console.log('No puede comprar')
}else if(!usuario){
    console.log('Inicia sesion o saca una cuenta');
}else if(!puedePagar){
    console.log('Fondos insufucientes')
}

