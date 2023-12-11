const nav = document.querySelector('.navegacion');

// //Registrar evento
// nav.addEventListener('click',()=>{
//     console.log('click en el navegador')
// })


//Funciona como un Hover

// nav.addEventListener('mouseenter',()=>{
//     console.log('entrando a la navegacion');
//     nav.style.backgroundColor = 'white';
// })


// nav.addEventListener('mousedown',()=>{
//     console.log('Precionar la navecion');
//     nav.style.backgroundColor = 'white';
// })

//mousedown y click casi tiene la misma funcion
// nav.addEventListener('click',()=>{
//     console.log('Click en la navegacion');
//     nav.style.backgroundColor = 'white';
// })


nav.addEventListener('mouseup',()=>{
    console.log('Se ejecuta cuando se da un click y se suelta');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout',()=>{
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick',()=>{
    console.log('se ejecuta cuando se da un doble click');
  
})

