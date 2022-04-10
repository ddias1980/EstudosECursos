//Captura os objetos
btnok = document.getElementById('btnok')
btncalcula = document.getElementById('calcula')
inputNum = document.getElementById('inputNum')
selResp = document.getElementById('selResp')

// da vida aos botoes 
btnok.setAttribute('onclick', 'adicionaItens()')
btncalcula.setAttribute('onclick', 'exibeResultados()')

//monitora o input para ativar o botão somente em caso de preenchimento
inputNum.focus()
btnok.disabled = true
btncalcula.disabled = true
inputNum.addEventListener('keyup', function(){
    if (inputNum.value != ''){
        btnok.disabled = false
    } else {
        btnok.disabled = true
    }
})


// cria a variável de vetor para receber os itens digitados
var resp = ['0'];



function adicionaItens(){
    if (validaInedito(inputNum.value) && validaNumero(inputNum.value)) {
        // captura os itens. 
        selItens = document.createElement('option')
        
        // preenche a variável. 
        resp.push(inputNum.value)

        //vai escrever sempre o último valor do vetor 
        //captura o ultimo valor do vetor
        ultimoResp = resp[resp.length -1]

        // joga o valor para o select como option
        selItens.text = `Valor Adicionado: ${ultimoResp}`
        selItens.value = `Iten${ultimoResp}`
        selResp.appendChild(selItens)

        //conta os options e habilita o botão se tiver mais de uma opção
        if (selResp.length >= 1){
            btncalcula.disabled = false
        } else {
            btncalcula.disabled = true
        }

        // limpa o formulário e poe o foco para facilitar a digitação 
        inputNum.value = ''
        inputNum.focus()
        btnok.disabled = true
    } else if ( validaNumero(inputNum.value) == false){
        window.alert('Só numeros positivos até 100')
        inputNum.focus()
    } else {
        window.alert('Voce já usou esse numero')
        inputNum.focus()
    }
    
}

function validaNumero(val){ // true se entre 0 a 100 
        if (Number(val) > '0' && Number(val) <= '100'){
            console.log(`${val} tá no escopo`)
            return true
        } else {
            console.log(`Fora do escopo ${val}`)
            return false
        }
       
    }
function validaInedito(val) { // true se inedito 
    
    for (i in resp) {
        if (resp.indexOf(val) == -1) {
            console.log(`${val} é inedito`)
            return true;
        } else {
            console.log(`${val} deu ${resp.indexOf(val)}`)
            return false;
        }
    }
}

function exibeResultados(){
    // captura os itens. 
    resultados = document.getElementById('div-resultados')

    // Exibe os valores
    resultados.innerHTML = `O total de números cadastrados é de: <strong>${resp.length}</strong>`
    resultados.innerHTML += `<p>O maior valor retornado foi: <strong>${maiorValor(resp)}</strong></p>`
    resultados.innerHTML += `<p>O menor valor retornado foi: <strong>${menorValor(resp)}</strong></p>`
    resultados.innerHTML += `<p>A soma de todos os valores foi: <strong>${somaValores(resp)}</strong></p>`
    resultados.innerHTML += `<p>A média dos valores lancados foi: <strong>${mediaValores(resp)}</strong></p>`

}

function maiorValor(valor){
    result = Math.max.apply(null, valor)
    return result
}

function menorValor(valor) {
    result = Math.min.apply(null, valor)
    return result
}

function somaValores(valor) {
    var soma = 0
    for (i in valor){
        soma += Number(valor[i])
    }
    return soma
}

function mediaValores(valor) {
    var media = 0
    var soma = 0
    for (i in valor){
        soma += Number(valor[i])
    }
    media = soma / valor.length
    return media
}