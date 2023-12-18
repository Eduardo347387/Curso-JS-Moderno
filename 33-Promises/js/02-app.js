// EJEMPPLO DE UN CALLBACK HELL 
// ES DECIR UN CALLBAC EXAGERADO

const countrys = [];

function addCountry(country,callback){
    countrys.push(country)
    callback()
    console.log(`add country: ${country}`)
}

function displayCountry(){
    console.log(countrys)
}


function InitcallbackHell(){
    setTimeout(()=>{
        addCountry('Turquia',displayCountry)
        setTimeout(()=>{
            addCountry('Suiza',displayCountry)
            setTimeout(()=>{
                addCountry('Mexico',displayCountry)
                setTimeout(()=>{
                    addCountry('Quatar',displayCountry)
                })
            },3000)
        },3000)
    },3000)
}

InitcallbackHell()