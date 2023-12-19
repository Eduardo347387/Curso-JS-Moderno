// Como saber si estan viendo mi pagina o cuando no la estan viendo

document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState === 'visible'){
        console.log('execute the function for the video')
    }else{
        console.log('Pause the video')
    }
})