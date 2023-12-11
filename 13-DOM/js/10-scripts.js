// Generar con HTML con JAVASCRIPT

//Creando enlace
const enlace = document.createElement('a');


//AGREGAR ATRIBUTOS 

//Agregando texto
enlace.textContent = 'Nuevo Enlace';
//ANIDIENDO href
enlace.href = '/nuevo-enlace';
enlace.target = "_black"    
//Crear un atributo personalizado
enlace.setAttribute('data-enlace','nuevo-enlace')
//AGREGAR UNA CLASE
enlace.classList.add('alguna-clase')

enlace.onclick = mifuncion;

console.log(enlace)

// Agregar el elemento creado al dom

const navegacion = document.querySelector('.navegacion');

//forma 1
// appendChild: Añadir un elemento al DOM al final
// navegacion.appendChild(enlace);

//forma 2
// insertBefore : Insertar antes 
// antes de la posicion 1
// De esta forma se tiene mas contro
// insertBefore(elemento,Nodo de referencia)
navegacion.insertBefore(enlace, navegacion.children[1]);

function mifuncion(){
    alert('Diste click')
}


//Crear un card 
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'concierto de rock'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio')

//Crear div con la clase info
const info = document.createElement('div')
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

// Crear el card 
const card = document.createElement('div')
card.classList.add('card')

card.appendChild(imagen);
card.appendChild(info);

console.log(card)


//INSERTAR HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);








