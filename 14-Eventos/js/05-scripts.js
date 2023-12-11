window.addEventListener('scroll',()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion)
    if(ubicacion.top > 585){
        console.log('Aun no, da mas scroll')
    }
    if(ubicacion.top < 584){
        console.log('El elemento ya esta visible')
    }
    if(ubicacion.top < -440){
        console.log('Aun no, da mas scroll hacia arriba')
    }
})