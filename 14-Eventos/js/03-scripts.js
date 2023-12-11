const busqueda = document.querySelector('.busqueda');

// keydown es un evento de teclado que se desencadena cuando
// se preciona un tecla del teclado 

// busqueda.addEventListener('keydown',(event)=>{
//     let tecla = event.key;
//     console.log(`tecla precionada: ${tecla}`)
// })


// keyup se ejecuta el evento cuando precionas
// y sueltas esa tecla

// busqueda.addEventListener('keyup',(event)=>{
//     // let tecla = event.key;
//     // console.log(`tecla precionada: ${tecla}`)
//     console.log('escribiendo...')
// })

//blur entras al input y este se ejecuta cuando sales de este 

// busqueda.addEventListener('blur',(event)=>{
//     // let tecla = event.key;
//     // console.log(`tecla precionada: ${tecla}`)
//     console.log('escribiendo...')
// })


//copy este se ejecuta cuando copias es decir cuando tecleas ctrl + c
// busqueda.addEventListener('copy',(event)=>{
//     // let tecla = event.key;
//     // console.log(`tecla precionada: ${tecla}`)
//     console.log('escribiendo...')
// })

//input es como el todo en un 
//en el funciona el varios eventos
//como copy cut keyup etc


//Mostar lo que el usuario esta escribiendo
busqueda.addEventListener('input',(event)=>{
    if(event.target.value === ''){
        console.log('fallo la validacion')
    }
})