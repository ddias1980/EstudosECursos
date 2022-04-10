// dá vida ao botão calcular
btnok = document.getElementById('btnok').setAttribute('onclick', 'validaPassos()')

// pega os valores dos campos
var numeroInicial = document.getElementById('form-inicio')
var numeroFinal = document.getElementById('form-fim')
var numeroPassos = document.getElementById('form-passo')
divresposta = document.getElementById('resposta')

// função que valida os dados
function validaPassos(){
    if (numeroInicial.value <= '0' ){
        alertaErro(numeroInicial)
    } else if (numeroFinal.value <='0' || Number(numeroFinal.value) <= Number(numeroInicial.value)) {
        alertaErro(numeroFinal)
        divresposta.innerHTML += ` ou maiores que o numero inicial - ${numeroFinal.value}`
    } else if (Number(numeroPassos.value) <= '0' || Number(numeroPassos.value) >= Number(numeroFinal.value)){
        alertaErro(numeroPassos)
    } else {
        divresposta.innerHTML += `ou maiores que o Numero Final`
        calculaDados()
    }
}

// faz as contas, é o que de fato interessa pro exercicio
function calculaDados(){
    // limpa a div aplica um estilo
    divresposta.innerText = ''
    divresposta.className = 'resp'
    // trata os valores para numericos para ficar mais facil
    ni = Number(numeroInicial.value)
    nf = Number(numeroFinal.value)
    np = Number(numeroPassos.value)
    for (i=ni; i<=nf; i+=np) {
        divresposta.innerHTML += `<p>Contando de ${ni} até ${nf}: <strong>Passo ${i}</strong> \u{1F447}</p>`
    }
}

// essa função gera as ações de erro quando der merda
function alertaErro(campo){   
    campo.className = 'error'
    campo.focus();
    campo.value = ''
    divresposta.className = 'error'
    divresposta.innerHTML = 'Use valores maiores que zero'
    
    campo.addEventListener('keyup', function(){
        if (campo.value == ''){

        } else {
            divresposta.classList.remove('error')
            divresposta.innerHTML = ''
            campo.classList.remove('error')
        }
    })
}