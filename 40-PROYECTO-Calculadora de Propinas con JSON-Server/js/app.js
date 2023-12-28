let cliente = {
    table: '',
    hour: '',
    pedido: []
}

let categorias = {
    1: 'Comida',
    2: 'Bebida',
    3: 'Postre'
} 

const btnCreateOrder =  document.getElementById('guardar-cliente')

btnCreateOrder.addEventListener('click',saveClient)

function saveClient(){
    const table = document.getElementById('mesa').value
    const hour = document.getElementById('hora').value
  
    const camposVacios = [table,hour].some(input => input === "")

    if(camposVacios){
        const existAlert = document.querySelector('.invalid-feedback')
        if(!existAlert){
            const alert = document.createElement('DIV')
            alert.classList.add('invalid-feedback','d-block','text-center')
            alert.textContent = 'Todos los campos son obligatorios'
            document.querySelector('.modal-body form').appendChild(alert)
            setTimeout(()=>{
                alert.remove()
            },3000)
        }
        return
    }
    // Asignar datos del formulario a cliente
    cliente = {...cliente,table,hour}
    // Ocultar modal
    const modalFormulario = document.getElementById('formulario')
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario)
    modalBootstrap.hide()
    displaySeccions()
    getDishes()
}

function displaySeccions(){
    const hidden_seccions =  document.querySelectorAll('.d-none')
    hidden_seccions.forEach(seccion => seccion.classList.remove('d-none'))
}
function getDishes(){
    const url = "http://localhost:3000/platillos"
    fetch(url)
        .then(response => response.json())
        .then(dishes => displaydishes(dishes))
}

function displaydishes(dishes){
    const content =  document.querySelector('#platillos .contenido')
    dishes.forEach(dish=>{
        const {id,nombre,precio,categoria} = dish;

        const row = document.createElement('DIV')
        row.classList.add('row','py-3','border-top')

        const name = document.createElement('DIV')
        name.classList.add('col-md-4')
        name.textContent = nombre

        const price =  document.createElement('DIV')
        price.classList.add('col-md-3','fw-bold')
        price.textContent = `$${precio}`

        const category = document.createElement('DIV')
        category.classList.add('col-md-3')
        category.textContent = categorias[categoria]

        const inputAmount = document.createElement('input')
        inputAmount.type = 'number'
        inputAmount.min = 0
        inputAmount.id= `producto${id}`
        inputAmount.value = '0'
        inputAmount.classList.add('form-control')

        inputAmount.onchange = ()=>{
            const amount = parseInt(inputAmount.value);
            addDishes({...dish,amount})
        }
        
        const add = document.createElement('DIV')
        add.classList.add('col-md-2')
        add.appendChild(inputAmount)
        
        row.appendChild(name)
        row.appendChild(price)
        row.appendChild(category)
        row.appendChild(add)

        content.appendChild(row)
    })
}

function addDishes(product){
    let {pedido} = cliente

    if(product.amount > 0){
        if(pedido.some(article=> article.id === product.id)){
            const pedidoActulizado = pedido.map(article=>{
                if(article.id === product.id){
                    article.amount = product.amount;
                }
                return article;
            })
            // se asigna el nuevo array a cliente pedido
            cliente.pedido = [...pedidoActulizado]
        }else{
            cliente.pedido = [...pedido,product]
        }
        
    }
    else{
        const resultado = pedido.filter(article=> article.id !== product.id)
        cliente.pedido = [...resultado]
    }
    cleanHTML()
    updateSummary()
}

function updateSummary(){
    const content = document.querySelector('#resumen .contenido')
    const summary = document.createElement('DIV')
    summary.classList.add('col-md-6','card','py-5','px-3','shadow')

    // info of the table
    const table = document.createElement('P')
    table.textContent = 'Table: '
    table.classList.add('fw-bold')

    const tableSpan = document.createElement('SPAN')
    tableSpan.textContent = cliente.table
    tableSpan.classList.add('fw-normal')

    // info of the hour
    const hour = document.createElement('P')
    hour.textContent = 'Hour: '
    hour.classList.add('fw-bold')

    const hourSpan = document.createElement('SPAN')
    hourSpan.textContent = cliente.hour
    hourSpan.classList.add('fw-normal')

    // add elements to parents
    table.appendChild(tableSpan)
    hour.appendChild(hourSpan)

    // seccion title
    const heading = document.createElement('H3')
    heading.textContent = 'Platillos consumidos'
    heading.classList.add('my-4','text-center')

    // iterate on order arrangement
    const group = document.createElement('UL')
    group.classList.add('list-group')

    const {pedido} = cliente
    pedido.forEach(article =>{
        const {nombre,amount,precio,id} = article;
        const list = document.createElement('LI')
        list.classList.add('list-group-item');
        
        // article name 
        const name = document.createElement('H4')
        name.classList.add('my-4');
        name.textContent = nombre

        // article amount
        const amountEl = document.createElement('P')
        amountEl.classList.add('fw-bold')   
        amountEl.textContent = 'Amount: '

        const amountValue = document.createElement('SPAN')
        amountValue.classList.add('fw-normal')
        amountValue.textContent = amount

        // article price
        const price = document.createElement('P')
        price.classList.add('fw-bold')   
        price.textContent = 'Price: '
    
        const priceValue = document.createElement('SPAN')
        priceValue.classList.add('fw-normal')
        priceValue.textContent = `$${precio}`


        const subtotal = document.createElement('P')
        subtotal.classList.add('fw-bold')   
        subtotal.textContent = 'Subtotal: '
    
        const subtotalValue = document.createElement('SPAN')
        subtotalValue.classList.add('fw-normal')
        subtotalValue.textContent = calculateSubtotal(precio,amount)

        const btnDelete = document.createElement('BUTTON')
        btnDelete.classList.add('btn','btn-danger')
        btnDelete.textContent = 'Eliminar del pedido';

        btnDelete.onclick = ()=>{
            deleteProduct(id)
        }

        // add values to your containers
        amountEl.appendChild(amountValue)
        price.appendChild(priceValue)
        subtotal.appendChild(subtotalValue)

        //add elements to LI
        list.appendChild(name)
        list.appendChild(amountEl)
        list.appendChild(price)
        list.appendChild(subtotal)
        list.appendChild(btnDelete)

        // add list to group main
        group.appendChild(list)
    })

    // add to content
    summary.appendChild(table)
    summary.appendChild(hour)
    summary.appendChild(heading)
    summary.appendChild(group)

    content.appendChild(summary)
   
}
function cleanHTML(){
    const content = document.querySelector('#resumen .contenido');
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
}
function deleteProduct(id){
    const {pedido} = cliente
    const resultado = pedido.filter(article=> article.id !== id)
    cliente.pedido = [...resultado]

    cleanHTML()
    updateSummary()
}
function calculateSubtotal(price,amount){
    return `$${price*amount}`
}