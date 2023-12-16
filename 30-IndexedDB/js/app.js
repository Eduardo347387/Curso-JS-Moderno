let DB

document.addEventListener('DOMContentLoaded',()=>{
    crmDB();

    setTimeout(()=>{
        createClient()   
    },5000)
})


function crmDB(){
    // crearte the basedata version 1.0
    let crmDB = window.indexedDB.open('crmDB',1)

    // if there is an error
    crmDB.onerror = function(){
        console.log('there was an error while creating the database')
    }

    //if it was created successfully
    crmDB.onsuccess = function(){
        console.log("database created")
        DB = crmDB.result
    }

    // configuration batabase
    crmDB.onupgradeneeded = function(e){
        console.log('this method is only executed once')
        const db = e.target.result

        const objectStore  = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        })

        // define columns

        objectStore.createIndex('name','name',{unique:false})
        objectStore.createIndex('mail','mail',{unique:true})
        objectStore.createIndex('numberPhone','numberPhone',{unique:false})

        console.log('Columns created')
    }
}


function createClient(){
    let transaction = DB.transaction(['crm'],'readwrite');
    transaction.oncomplete = function(){
        console.log('transaction completed')
    }

    transaction.onerror= function(){
        console.log('there was an error transaction')
    }
    const objectStore = transaction.objectStore('crm')

    const newClient = {
        telefono:7711223232,
        nombre: 'eduardo',
        email: 'eduardo@12.com'
    }
    const request = objectStore.add(newClient)

    console.log(request)
}
