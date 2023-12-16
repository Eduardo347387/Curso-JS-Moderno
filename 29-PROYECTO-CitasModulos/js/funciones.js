import UI from "./classes/UI.js";
import Citas from "./classes/citas.js";
import { ls,CITAS_KEY } from "../js/classes/app.js";
import { formulario,mascotaInput,propietarioInput,telefonoInput,fechaInput,horaInput,sintomasInput} from "./selectores.js";

export const ui = new UI();
export const administrarCitas = new Citas();
let Editar 

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}

export function datosCita(e) {
    //  console.log(e.target.name) // Obtener el Input
     citaObj[e.target.name] = e.target.value;
}


export function nuevaCita(e) {
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    const fechaObjeto = new Date(fechaInput.value);
    fechaObjeto.setDate(fechaObjeto.getDate() + 1)

    const fechaHoy = new Date();
    const soloFecha = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaHoy.getDate());

    
    // Validar
    if( mascota.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || fecha.trim() === ''  || hora.trim() === '' || sintomas.trim() === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;

    }else if(fechaObjeto < soloFecha){
        ui.imprimirAlerta('Fecha invalida', 'error');
        return;
    }

    if(Editar){
    
        let newListCitas = administrarCitas.citas.filter(cita=> cita.id !== citaObj.id)

        if(validarFechaYhora(newListCitas)){
            administrarCitas.actulizarCita({...citaObj})
            ui.imprimirAlerta('Cita Editada correctamente')
            formulario.querySelector('[type = "submit"]').textContent = 'Crear Cita'
            Editar = false; 
            fechaInput.defaultValue = ''

            // Imprimir el HTML de citas
            ui.imprimirCitas(administrarCitas);

            // Reinicia el objeto para evitar futuros problemas de validación
            reiniciarObjeto();

            // Reiniciar Formulario
            formulario.reset();
        }
    }else{
    
        if(validarFechaYhora(administrarCitas.citas)){
            // Generar un ID único
            citaObj.id = Date.now();
            
            // Añade la nueva cita
            administrarCitas.agregarCita({...citaObj});

            // Mostrar mensaje de que todo esta bien...
            ui.imprimirAlerta('Cita Agregada Correctamente');


            // Imprimir el HTML de citas
            ui.imprimirCitas(administrarCitas);

            // Reinicia el objeto para evitar futuros problemas de validación
            reiniciarObjeto();
            

            // Reiniciar Formulario
            formulario.reset();
        }
      
    }
}



function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


export function eliminarCita(id){
    
    // Eliminar paciente desde clase
    administrarCitas.eliminarCita(id)
    // Mandar mensaje
    ui.imprimirAlerta('Cita eliminada correctamente')
    // Mostrar lista actulizada
    ui.imprimirCitas(administrarCitas)
    
    formulario.reset()
    formulario.querySelector('[type = "submit"]').textContent = 'Crear Cita'
    Editar = false; 
    fechaInput.defaultValue = ''
    reiniciarObjeto()
}

export function edicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    mascotaInput.value       =  mascota
    propietarioInput.value   =  propietario
    telefonoInput.value      =  telefono
    // fecha.value              =  fecha 
    fechaInput.defaultValue = fecha
    horaInput.value          =  hora
    sintomasInput.value      =  sintomas

    citaObj.mascota = mascota
    citaObj.propietario = propietario 
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora = hora
    citaObj.sintomas = sintomas
    citaObj.id = id
   
    formulario.querySelector('[type = "submit"]').textContent = 'Editar Paciente'
    Editar = true; 
}

 export function saveData(data){
    const jsonData = JSON.stringify(data)
    ls.setItem(CITAS_KEY,jsonData)
}

function validarFechaYhora(citas){
    if(citas.some(cita => cita.fecha === citaObj.fecha && cita.hora === citaObj.hora)) {
        ui.imprimirAlerta('Ya existe una cita en la fecha y hora mencionada', 'error');
        return false;
    }
    return true
}