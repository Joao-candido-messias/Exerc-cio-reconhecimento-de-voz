const menorValor = 0;
const maiorValor = 100;

function gerarNumeroAleatorio(){
    return  parseInt(Math.random()*maiorValor +1)
}

const numeroSecreto = gerarNumeroAleatorio();

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

