const exit = document.getElementById('salida');
const microphone = document.getElementById('microfono')

microphone.addEventListener('click',executeSpeechAPI);

function executeSpeechAPI(){
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition();

    recognition.start()

    recognition.onstart = function(){
        exit.classList.add('mostrar');
        exit.textContent = 'Escuchando'
    }

    recognition.onspeechend = function(){
        exit.textContent = 'se dejo de grabar'
        recognition.stop()
    }

    recognition.onresult = function(e){
        const {confidence,transcript} = e.result[0][0]

        const speech = document.createElement('P')
        speech.innerHTML = `recorded ${transcript}`

        const segurity = document.createElement('P')
        segurity.innerHTML = `Segurity: ${parseInt(confidence * 100)} %`

        exit.appendChild(speech)
        exit.appendChild(segurity)
    }
}