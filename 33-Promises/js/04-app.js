const countrys = [];

const addCountry = country => new Promise(resolve =>{
    setTimeout(()=>{
        countrys.push(country)
        resolve(`add country: ${country}`)
    },3000)
})



addCountry('italia')
    .then((result) => {
        console.log(result)
        console.log(countrys)
        return addCountry('Turquia')
    })  
    .then((result)=>{
        console.log(result)
        console.log(countrys)
        return addCountry('Mexico')
    })
    .then((result)=>{
        console.log(result)
        console.log(countrys)
    })

