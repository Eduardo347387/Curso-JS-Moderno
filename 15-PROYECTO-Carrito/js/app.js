const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCurso = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListener()
function cargarEventListener(){
    listaCurso.addEventListener('click', agregarCurso);

    //6
    carrito.addEventListener('click',eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];
        LimpiarHTML();
    })
}

// funciones
//1
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const CursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(CursoSeleccionado);
    }   
}

//7
//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')     /// 1          7
        //Solo esta dejando entrar al nuevo arreglo a aquellos que son diferentes al id seleccionado
        // de tal forma que el que es igual al id que da fuera de esta forma creando un nuevo arreglo actualizado
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        // depues se manda a llamar la funcion para actualizar el html 
        carritoHTML()
    }
}


// LEER EL CONTENIDO DEL HTML AL QUE LE DIMOS CLICK Y 
// EXTRAE LA INFORMACION DEL CURSO
//2
function leerDatosCurso(curso){
    // CREAR UN OBJETO CON EL CONTENIDO DEL CURSO ACTUAL
    const infoCurso ={  
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1  
    }


    // Revisa si un elemento ya existe en el carrito
    // 5 === 5

    //5
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //Actualizamos la cantidad 
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
            }
            console.log(curso)
            return curso; // retorna el objeto actualizamos 
        });
        articulosCarrito = [...cursos]
    }else{
        // Agregamos elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }
    
    carritoHTML();
    // console.log(articulosCarrito);
}


// Muestra el carrito de compras en el HTML
//3
function carritoHTML(){
    // Limpiar el html
    LimpiarHTML()
    //Recorre el carrito y genera el html
    articulosCarrito.forEach (curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;

        // const row = document.createElement('tr');
        const row = document.createElement('tr');


        const tdImg = document.createElement('td');
        const img = document.createElement('img');

        const tdTitulo = document.createElement('td');
        const tdPrecio = document.createElement('td');
        const tdCantidad = document.createElement('td')

        img.src = imagen
        img.setAttribute('width','100')
        tdImg.appendChild(img)


        tdTitulo.textContent = titulo
        tdPrecio.textContent = precio
        tdCantidad.textContent = cantidad

        const deleteCurso = document.createElement('a')
        deleteCurso.href = '#'
        deleteCurso.classList.add('borrar-curso')
        deleteCurso.setAttribute('data-id',id)
        deleteCurso.textContent = 'X'

        const tdDelete = document.createElement('td')
        tdDelete.appendChild(deleteCurso)

        row.appendChild(tdImg)
        row.appendChild(tdTitulo)
        row.appendChild(tdPrecio)
        row.appendChild(tdCantidad)
        row.appendChild(tdDelete)
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos de tbody
function LimpiarHTML(){
    //4
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

