// Estamos indicando que el siguiente evento
// se disparara una vez que haya descargado 
// todo el dom todo los elemento de la pagina

document.addEventListener('DOMContentLoaded',function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
        cc:''
    }

    // selecionar los elemento de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc')
    const inputAsulto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //Evento que se ejecuta cuando sales de input
    inputEmail.addEventListener('input', validar);
    inputCC.addEventListener('input',validar)
    inputAsulto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit',enviarEmail);

    btnReset.addEventListener('click', function(e){
         e.preventDefault();
        resetForm();
    })

    function enviarEmail(e){
        e.preventDefault()
        spinner.classList.add('flex');
        spinner.classList.remove('hidden')

        setTimeout(()=>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden')
            resetForm();

            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10',
            'font-bold','text-sm','upercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);

             setTimeout(()=>{
                alertaExito.remove();
            },3000)
        },3000)
    }

    function validar(e){
        //trim() elimina espacios vacios
        if(e.target.value.trim()=== '' && e.target.id != 'cc'){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = ''
            comprobarEmail();
            return;
        }
        if(!validarEmail(e.target.value)  && ((e.target.id === 'email' || e.target.id ==='cc'))){
            mostrarAlerta('El campo gmail es incorrecto', e.target.parentElement);
            email[e.target.name] = ''
            comprobarEmail();

            if(e.target.value.trim() === '' && e.target.id === 'cc'){
                limpiarAlerta(e.target.parentElement);
            }
            return;
        }
        
        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase()
        //Comprobar el objeto de email
        comprobarEmail();
        // console.log(Object.values(email.cc))
        // console.log(email)
       
    }


    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia)

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-while', 'p-2', 'text-center')
        referencia.appendChild(error);
    }


    function limpiarAlerta(referencia){
        //comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        console.log(alerta)
        if(alerta){
            alerta.remove()
        }
    }
    function validarEmail(email){
        const  regex  =   /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
    
    function comprobarEmail(){
        if(Object.values(email).slice(0,3).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;  
            return
        }    
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
        
      
    }
    function resetForm(){
        email.asunto=''
        email.email=''
        email.mensaje=''
        email.cc=''
        formulario.reset()
        comprobarEmail()
    }
    
});