//Anadir funciones en un objeto
//Pero estos como su fuese valores

const reproductor={
    cancion: '',
    reproducir: id=> `Reproducir canciones con el id ${id}`,
    pausa: ()=> 'Pausando',
    NewPlayList: name=>{`Nueva playList creada: ${name}`;return name;},
    reproducirPlaylist: nombre=> `Reproduciendo la playList ${nombre}`,

    //SET es una forma de agregar valores
    set nuevacancion(cancion){
        this.cancion=cancion;
        console.log(`Añidiendo ${cancion}`)
    },

    //GET es un forma de obteber de nuevo eso valores 
    get obtenerCancion(){
        console.log(this.cancion)
    }
}

reproductor.nuevacancion = 'TKM';
reproductor.obtenerCancion;

console.log(reproductor.reproducir(30))
console.log(reproductor.reproducir(20))
console.log(reproductor.pausa())


//Agregar un nueva funcion
reproductor.borrar = id=>`borrar cancion... ${id}`;

console.log(reproductor.borrar(30))
console.log(reproductor.NewPlayList('Tumbados')) 
console.log(reproductor.reproducirPlaylist(reproductor.NewPlayList('corridos')))