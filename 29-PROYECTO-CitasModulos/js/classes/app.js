import { datosCita, nuevaCita, ui,administrarCitas} from "../funciones.js";
import { sintomasInput,mascotaInput,propietarioInput,telefonoInput,fechaInput,horaInput,formulario} from "../selectores.js";

export const ls = window.localStorage;
export const CITAS_KEY =  'citas'
 

export const nombre = 'Lalo'


class App{
    constructor(){
        this.initApp()
    }

    initApp(){
        window.addEventListener('beforeunload',()=>formulario.reset())
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
        formulario.addEventListener('submit', nuevaCita);
        // verificar si existe la llave citas 
        if(ls.getItem(CITAS_KEY)){
            administrarCitas.citas = JSON.parse(ls.getItem(CITAS_KEY))
            ui.imprimirCitas(administrarCitas)
        }
    }
}

export default App;