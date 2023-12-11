const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
   
})

function validarFormulario(){
    //prevenimos al accion que se realizaria
    //en esta caso envio de informacion
    //mediante el metodo POST o entrar a otro enlace
    e.preventDefault();
    console.log('Buscando...')
    console.log(e)
}