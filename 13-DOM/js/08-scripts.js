const navegacion = document.querySelector('.navegacion')

// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // 

//Acceder el primer elemento de la navegacion
console.log(navegacion.firstElementChild);
//Acceder al ultimo elemento de la navegacion
console.log(navegacion.lastElementChild)


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg'
// console.log(card.children[0])




// Traversing the hijo al padre 
// console.log(card.parentNode);//Al poner Node este toma en cuenta los espacios en blanco
// console.log(card.parentElement) // contenedor-cards "este es su padre" Nota: Es mejor usar element ya que no toma encuenta los espacios solo los elementos
// console.log(card.parentElement.parentElement)// hacer
// console.log(card.parentElement.parentElement.parentElement) // contenido contenedor



// Nota con children vas recorriendo los hijos
// y con parentElemen va a ir recorriendo hacia el padre 

// console.log(navegacion.children); // Los espacios en blanco son considerados elementos

// Un padre tienen hijos lo cuales son hermanos
// nextElementSibling accede al siguienre elemento hermano

// console.log(card)
// // al siguiente
// console.log(card.nextElementSibling)
// // al siguiente al siguiente
// console.log(card.nextElementSibling.nextElementSibling)
// // al siguiente al siguiente al siguiente
// console.log(card.nextElementSibling.nextElementSibling.nextElementSibling)

// Acceder al ultimo elemento o en uno en espesifico

// const tercerCard = document.querySelector('.card:nth-child(3)');
// console.log(tercerCard);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard);

//Acceder al ultimo card pero despues vuelve al anterior
// console.log(ultimoCard.previousElementSibling);

