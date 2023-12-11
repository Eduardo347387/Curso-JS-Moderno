//cambiando el css con javascript
const encabezado  = document.querySelector('h1')
// console.log(encabezado.style)

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase'

const card = document.querySelector('.card');
//Agregar un a nueva clase
card.classList.add('nueva-clase','segunda-clase');
//Elimimar un clase 
card.classList.remove('card')




