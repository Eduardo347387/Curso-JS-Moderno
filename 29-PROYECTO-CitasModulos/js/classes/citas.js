// CLasses
import { saveData } from "../funciones.js";

class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        saveData(this.citas)
    } 
    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id)
        saveData(this.citas)
    }
    actulizarCita(citaAtualizada){ 
        this.citas =  this.citas.map(cita=> cita.id === citaAtualizada.id ? citaAtualizada: cita)
        saveData(this.citas)
    }
}

export default Citas;

