// learging promise

const applyDiscount =  new Promise((resolve,reject)=>{
    const discount = true

    if(discount){
        resolve('applying discount')
    }
    else{
        reject('Discount could not be applied')
    }
})


// Mostrar si todo salio bien
applyDiscount.then(result =>messageGood(result))
// Mostar si algo salio mal
applyDiscount.catch(error=>{
    console.log(error)
})

function messageGood(mesage){
    console.log(mesage)
}

// Hay 3 valores posibles
// filfilled - el promise se cumplio
// rejected - el promise no se cumplio
// pending - no se ha cumplido y tampoco fue rechazado