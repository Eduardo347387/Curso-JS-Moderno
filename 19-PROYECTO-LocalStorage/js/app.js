// Variables 
const $formulario = document.querySelector('#formulario');
const $listaTweers = document.querySelector('#lista-tweets')
let tweets = []
// Event Listeners

evenListener();

function evenListener(){
    $formulario.addEventListener('submit',agregarTweet)

    document.addEventListener('DOMContentLoaded', ()=>{
        //        si esto marca null                      vamos asignale un arreglo vacio
        tweets =  JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets)
        crearHTML()
    })
}
// Funciones

function agregarTweet(e){
    e.preventDefault();
    const tweet =  document.querySelector('#tweet').value;
    if(tweet.trim() === ''){
        mostrarError('Un mensaje no puede ir vacio')
        return;
    }

    const tweetObj = {
        id:Date.now(),
        tweet
    }
    // Añadir al arreglo de Tweets
    //        Creamos una copia y agregamos el elemento
    tweets = [...tweets,tweetObj]

    // una vez agregado vamos a crea el HTML
    crearHTML()

    $formulario.reset()
}

function mostrarError(error){
    const $mensajeError =  document.createElement('P')
    $mensajeError.textContent = error;
    $mensajeError.classList.add('error')

    //instertar el cotenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild($mensajeError)

    setTimeout(()=>{
        $mensajeError.remove()
    },3000)
}

function crearHTML(){
    limpiarHTML()
    if(tweets.length > 0){
        tweets.forEach(tweet=> {
            // Agregar boton de eliminar
            const $btnEliminar = document.createElement('A')
            $btnEliminar.classList.add('borrar-tweet')
            $btnEliminar.textContent = 'X'
            $btnEliminar.onclick = ()=>{
                
            }
            $btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id)
            }

            //crear html
            const li = document.createElement('li')
            //Anadir texto
            li.textContent = tweet.tweet
            //Asignar el boton
            li.appendChild($btnEliminar)
            //insertando html
            $listaTweers.appendChild(li)
        });
    }

    sincronizarStorage();
}

//Agrega los tweet actuales a locastorage

function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets))
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id != id)
    crearHTML()
}

function limpiarHTML(){
    while($listaTweers.firstChild){
        $listaTweers.removeChild($listaTweers.firstChild)
    }
}