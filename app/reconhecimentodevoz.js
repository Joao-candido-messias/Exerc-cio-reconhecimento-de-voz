const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecongnition ||
webkitSpeechRecognition;

const recognition = new SpeechRecognition();


recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute)
    validacaoDoChute(chute) 
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>
            Você disse:<span class="box">${chute}</span></div>

    `
}


recognition.addEventListener('end', ()=> recognition.start())