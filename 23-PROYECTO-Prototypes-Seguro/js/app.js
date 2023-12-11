// constructores

function Seguro(marca,year,tipo){
    this.marca =  marca;
    this.year = year;
    this.tipo = tipo;
}
// Realizar la cotizacion con los datos
Seguro.prototype.cotizarSeguro =  function(){
    /*
        1 = Americano 1.5
        2 = Asiatico 1.5 
        3 = Europe 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;    
        default:
            break;
    }

    // leer el anio
    const diferencia = new Date().getFullYear() - this.year;
    
    // Cada anio que la diferencia es mayor el costo se va a reducir un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /* 
        si el seguro es basico se multiplica en un 30%
        si el seguro es completo se multiplica por el 50% mas
    */

    console.log(cantidad)    

    if(this.tipo === 'basico'){
        // vamos a incrementarlo un 30% mas
        cantidad *= 1.30
    }else{
          // vamos a incrementarlo un 50% mas
        cantidad *= 1.50
    }
    return cantidad;
}


//User interfaces
//contructor vacio
function UI(){}

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(), //anio actual 
    min = max-20; 

    const $selectYear = document.getElementById('year')

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        $selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla 

UI.prototype.mostrarMensaje = (mensaje,tipo) =>{
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const $formulario = document.getElementById('cotizar-seguro');
    // El div se va a insertar antes de resultado
    $formulario.insertBefore(div,document.getElementById('resultado'));
    
    setTimeout(()=>{
        div.remove()
    },3000)
} 

const Ui = new UI()


UI.prototype.mostrarResultados = (total,seguro)=>{

    const { marca, year, tipo } = seguro
    let textMarca
    switch(marca){
        case '1':
            textMarca = 'Americano'
            break;
        case '2':
            textMarca = 'Asiatico'
            break;   
        case '3':
        textMarca = 'Europeo'
            break; 
        default:
            break
    }

    // Crear el resultado
    const div =  document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca:<span class="font-normal"> ${textMarca}</span></p>
        <p class="font-bold">Anio:<span class="font-normal"> ${year}</span></p>
        <p class="font-bold capitalize">Tipo:<span class="font-normal"> ${tipo}</span></p>
        <p class="font-bold">Total:<span class="font-normal"> $${total}</span></p>
    `;

    const resultadoDiv =  document.getElementById('resultado');

    const $spinner = document.getElementById('cargando')
    $spinner.style.display = 'block';

    setTimeout(()=>{
        $spinner.style.display = 'none' // se borra el spinner
        resultadoDiv.appendChild(div) // se muestra el resultado
    },3000)

}

document.addEventListener('DOMContentLoaded',()=>{
    Ui.llenarOpciones();
})

addEventListener()

function addEventListener(){
    const $formulario = document.getElementById('cotizar-seguro');
    $formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    
    // leer la marca seleccionada 
    const $marca = document.getElementById('marca').value

    // leer el anio seleccionado
    const $year = document.getElementById('year').value

    // leer el tipo de cobertura
    const $tipo = document.querySelector('input[name="tipo"]:checked').value ;// aqui hay dos radio
    // pero solo vamos a selecionar el que el usuario a chekeado
 
    if($marca === '' || $year === '' || $tipo === ''){
        Ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return
    }
    Ui.mostrarMensaje('Cotizando...','exito');

    // Ocultar la cotizacion previas
    const resultado = document.querySelector('#resultado div')
    if(resultado != null){
        resultado.remove()
    }

    // instanciar el seguro
    const seguro  = new Seguro($marca, $year, $tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype que va a cotizar
    Ui.mostrarResultados(total,seguro)
    
}