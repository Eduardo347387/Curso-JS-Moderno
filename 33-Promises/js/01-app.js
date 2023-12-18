// callback
// es como mandar a llamar de nuevo un funcion para que
// vuelva a realizar de nuevo dicha funcion 
// ejemplo

const countrys = ['Turquia','Quatar','Estambul','Alemania','China','Mexico']

function addCountry(country,callback){
    setTimeout(()=>{
        countrys.push(country)
        callback();
    },2000)
}


function displayCountry(){
    setTimeout(()=>{
        countrys.forEach(country=>{
            console.log(country)
        })
    },1000)
}
displayCountry()

addCountry('rusia',displayCountry)