// Event Bubbling

//es es un propacion es decir si todo card 
//como no tiene pabre solo a el va a afectar 
//si todo a titulo este a a afectar a info 
//y card si todo a info solo va a afectar 
//a card


//ESTE SE PUEDE DETENER LAS PROPAGACION A TRAVES DE 
//UN METODO ESTO PARA QUE SOLO DETECTE LO QUE 
// SE ESTA TOCANDO stopPropagation();
const CarDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo');

CarDiv.addEventListener('click', e =>{
    // e.stopPropagation();
    console.log('click en card')
});

infoDiv.addEventListener('click', e =>{
    // e.stopPropagation();
    console.log('click en info')
});

titulo.addEventListener('click', e =>{
    // e.stopPropagation();
    console.log('click en titulo')
});