//Anadir funciones en un objeto
//Pero estos como su fuese valores

const reproductor={
    reproducir: function(id){
        console.log(`Reproducir canciones con el id ${id}`);
    },
    pausa: function(){
        console.log('Pausando');
    },
    NewPlayList: function(name){
        console.log(`Nueva playList creada: ${name}`)
        return name;
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playList ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausa();


//Agregar un nueva funcion
reproductor.borrar = function(id){
    console.log(`borrar cancion... ${id}`);
}

reproductor.borrar(30)
reproductor.NewPlayList('Tumbados') 
const namePlayList= reproductor.NewPlayList('corridos') 
reproductor.reproducirPlaylist(namePlayList)