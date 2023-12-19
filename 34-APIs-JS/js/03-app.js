// IDENTIFICAR CUANDO ESTAMOS CONECTADOS A INTERNET Y DESCONECTADOS

window.addEventListener('online',updateStatus)
window.addEventListener('offline',updateStatus)


function updateStatus(){
    if(navigator.online){
        console.log('if you are connected')
    }else{
        console.log("you're not online")
    }
}