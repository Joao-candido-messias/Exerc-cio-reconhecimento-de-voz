function  validacaoDoChute(chute){
    const numero = +chute

    if(validaNumero(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(validaRange(numero)){
        elementoChute.innerHTML += `
        <div>Valor invalido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
       `
       return
    }


    if(numero===numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero >numeroSecreto){
        elementoChute.innerHTML += `
        <div>
        O número secreto é menor
        <i class="fa-solid fa-angle-down"></i>
    </div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>
        O número secreto é maior
        <i class="fa-solid fa-angle-up"></i>
    </div>
    `
    }
}

function validaNumero(numero){
    return Number.isNaN(numero)
}

function validaRange(numero){
    if(numero<menorValor || numero>maiorValor){
        return numero<menorValor || numero>maiorValor
    }
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})