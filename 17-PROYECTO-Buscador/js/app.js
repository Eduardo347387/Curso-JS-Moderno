//Variables
const inputOption = document.querySelector('#buscador')
// contenedor para los resultados
const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda ={
    marca: '',
    year:  '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded',(e) =>{
    mostrarAutos(autos);
    llenarSelect();
    addEvent()

})

// marca.addEventListener('change', e =>{
//     datosBusqueda.marca = e.target.value;
//     console.log(datosBusqueda)
// })


function addEvent(){
    // Event listener para los select de busqueda
    // change    se utiliza para detectar cambiar en el html
    // en este caso detecta si se realizo un cambio en el select
    // console.log('addEvent')
    // console.log(inputOption)
    inputOption.addEventListener('change',(e)=>{
        // console.log('ejecucion')


        if(e.target.classList.contains('u-full-width')){

            propiedad =  e.target.id
            
            if(propiedad === 'year'){
                datosBusqueda.year = parseInt(e.target.value)
                
            }
            else if(propiedad === 'puertas'){
                datosBusqueda.puertas = parseInt(e.target.value)
            }
            else{
                datosBusqueda[propiedad] = e.target.value
            }

            filtrarAuto()
        }
    })
    
}

function mostrarAutos(autos){
    limpiarHTML()

    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color}= auto
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - Puertas: ${puertas} - Transmicion: ${transmision}
        - precio: ${precio} - Color: ${color}
        `
        resultado.appendChild(autoHTML)
     
    });
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('DIV')
    noResultado.classList.add('alerta','error')
    noResultado.textContent = 'NO HAY RESULTADOS, INTENTA CON OTROS TERMINOS DE BUSQUEDA'   
    resultado.appendChild(noResultado)
}
 
function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option')
        opcion.value = i;
        opcion.textContent = i
        year.appendChild(opcion)
    }
}

function filtrarAuto(){

    console.log(datosBusqueda)
    //                            funcion de alto nivel
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarPrecioMin ).filter( filtarPrecioMax ).filter( filtrarPuerta ).filter(filtrarTransmision ).filter( filtrarColor )
    //filter soporta el cheynig o encadenamiento
    // console.log(resultadoACT) 

    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
    
}


function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
    //seleciona las marcas un por una de obj autos y las compara
    //valor marca de obj autos es igual igual a eje:BMW
        return auto.marca === marca //Audi
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year
    }
    return auto 
}

function filtrarPrecioMin(auto){
    const{minimo} = datosBusqueda
    if(minimo){
        return auto.precio >= minimo
    }
    return auto
}

function filtarPrecioMax(auto){
    const{maximo} = datosBusqueda
    if(maximo){
        return auto.precio <= maximo
    }
    return auto
}

function filtrarPuerta(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas
    }
    return auto 
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision
    }
    return auto 
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color
    }
    return auto 
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}