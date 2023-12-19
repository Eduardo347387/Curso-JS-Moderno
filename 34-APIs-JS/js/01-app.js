// MANDAR NOTIFICACIONES AL NAVEGADOR

const notification = document.getElementById('notificar')
const viewNotification = document.getElementById('verNotificacion')

notification.addEventListener('click',()=>{
    Notification.requestPermission()
    .then((result) => {
        console.log(result)
    })
})

viewNotification.addEventListener('click',()=>{
    if(notification.premission = 'granted'){
        const bannerNotification = new Notification('this is the notification',{
            icon: 'img/ccj.png',
            body: 'this is the page code juan visit the'
        })

        bannerNotification.onclick = ()=>{
            window.open('https://www.codigoconjuan.com')
        }
    }
})


