//COMO SE COMUNICAN LAS FUNCIONES

iniciarApp();

function iniciarApp(){
    console.log('Iniando app...')
    segundaFuncion()
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Pablo')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}