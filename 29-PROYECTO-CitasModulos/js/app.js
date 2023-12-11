// Selecccionado Inputs de formulario
const InputNombre = document.getElementById('mascota')
const InputPropietario = document.getElementById('propietario')
const InputTelefono = document.getElementById('telefono')
const InputFecha = document.getElementById('fecha')
const InputHora = document.getElementById('hora')
const InputSintomas = document.getElementById('sintomas')

// UI
const formulario =  document.getElementById('nueva-cita')
const ListaCitas =  document.getElementById('citas')

//Objeto de datos
const citasObj = {
    mascota:        '',
    propietario:    '',
    telefono:       '',
    fecha:          '',
    hora:           '',
    sintomas:       ''
}

// clases 

class AdmiCitas{
    constructor(){
        this.citas = []
    }

    agregarCita(cita){
        this.citas = [...this.citas,cita]
        console.log(this.citas)
    }
}

class UI{
    imprimirAlerta(mensaje,tipo){
        const divAlerta = document.createElement('DIV')
        divAlerta.className = 'text-center alert d-block col-12'

        if(tipo === 'error'){
            divAlerta.classList.add('alert-danger');
        }else{
            divAlerta.classList.add('alert-success');
        }

        divAlerta.textContent = mensaje

        document.getElementById('contenido').insertBefore(divAlerta, document.querySelector('.agregar-cita'))

        setTimeout(()=>{
            divAlerta.remove()
        },2000)
    }

    ImprimirCitas({citas}){
        this.limpiarHTML()

        citas.forEach(cita => {
            const {mascota,propietario,telefono,fecha,hora,sintomas} = cita

            const divCita = document.createElement('DIV')
            divCita.className = 'cita p-3'
    
            const mascotaParrafo =  document.createElement('H2');
            mascotaParrafo.className = 'card-title font-weight-bolder'
            mascotaParrafo.textContent = mascota
    
            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML =  `
                <span class="font-weight-bolder ">Propietario: </span>${propietario}
            `;
    
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML =  `
                <span class="font-weight-bolder ">Telefono: </span>${telefono}
            `;
    
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML =  `
                <span class="font-weight-bolder">Fecha: </span>${fecha}
            `;
    
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML =  `
                <span class="font-weight-bolder ">Hora: </span>${hora}
            `;
    
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder ">Sintomas: </span>${sintomas} 
            `;
    
            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
    
            ListaCitas.appendChild(divCita)
        });
       
    }

    limpiarHTML(){
        while(ListaCitas.firstChild){
            ListaCitas.removeChild(ListaCitas.firstChild)
        }
    }
}

// INSTANCIAR DE MANERA GLOBAL
const ui = new UI();
const AdministrarCitas = new AdmiCitas();

// Llamar eventos 
eventListener()
function eventListener(){
    //Reiniciar formulario al recargar pagina
    window.addEventListener('beforeunload', ()=> formulario.reset());
    
    InputNombre.addEventListener('input',ObtenerDato);
    InputPropietario.addEventListener('input',ObtenerDato);
    InputTelefono.addEventListener('input',ObtenerDato);
    InputFecha.addEventListener('input',ObtenerDato);
    InputHora.addEventListener('input',ObtenerDato);
    InputSintomas.addEventListener('input',ObtenerDato);

    formulario.addEventListener('submit',validarInputs)
}


// FUNCIONES

function ObtenerDato(e){
    // Llenando el Objeto Literal
    citasObj[e.target.name] = e.target.value;
    console.log(citasObj)
}

function validarInputs(e){
    e.preventDefault()
    
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citasObj

    if(mascota.trim() === '' || propietario.trim() === ''|| telefono.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
        ui.imprimirAlerta('Todos los campos son necesarios','error')
        console.log(AdministrarCitas.citas)
        return
    }

    // agregar una cita
    citasObj.id = Date.now()
    AdministrarCitas.agregarCita({...citasObj})

    // Reiniciar Objeto literal
    ReloadObject()
    // Reiniciamos formulario
    formulario.reset()


    // Agregar cita al HTML
    ui.ImprimirCitas(AdministrarCitas)
}


function ReloadObject(){
    citasObj.mascota     =    '',
    citasObj.propietario =    '',
    citasObj.telefono    =    '',
    citasObj.fecha       =    '',
    citasObj.hora        =    '',
    citasObj.sintomas    =    ''
}









