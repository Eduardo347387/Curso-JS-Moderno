const producto = 'Monitor 20 pulgadas';

// .repear te va a permitir repetir una cadena de texto...
const texto = 'en promocion '.repeat(3.4);
console.log(texto)
console.log(`${producto} ${texto} !!!`)

//Split, dividir un string 

const actividad = "Estoy aprendiendo Javascript Moderno"
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan"
console.log(tweet.split('#'))