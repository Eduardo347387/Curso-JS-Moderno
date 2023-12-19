// ACTIVAR Y DESACTIVAR EL MODO PANTALLA COMPLETA

const openBtn = document.getElementById('abrir-pantalla-completa')
const ExitBtn = document.getElementById('salir-pantalla-completa')


openBtn.addEventListener('click',screenComplete)
ExitBtn.addEventListener('click',exitScreenComplete)

function screenComplete(){
    document.documentElement.requestFullscreen()
}

function exitScreenComplete(){
    document.exitFullscreen();
}