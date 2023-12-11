const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer')

//forma 1
// btnFlotante.addEventListener('click',()=>{
//     console.log('Diste click');
// })

//forma 2
btnFlotante.addEventListener('click',mostrarOcultarFooter)

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda'

    }else{
        footer.classList.add('activo')
        this.classList.add('activo')
        this.textContent = 'X Cerrar'
    }
   
}