// IDENTIFICAR CUANDO UN ELEMENTO ESTA VISIBLE EN EL NAVEGADOR 

document.addEventListener('DOMContentLoaded',()=>{
    const observer = new IntersectionObserver( entries=>{
        if(entries[0].isIntersecting){
            console.log('the element is visible')
        }
    })
    observer.observe(document.querySelector('.premium'))
})

