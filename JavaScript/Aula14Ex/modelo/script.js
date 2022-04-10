// dá vida ao botao Gerar
document.getElementById('btnok').setAttribute('onclick', 'resolveTabuada()')

// se o valor for 0 ou estiver apagado, o botão não habilita
document.getElementById('btnok').disabled = true
document.getElementById('inputTabuada').addEventListener('keyup', function(){
    inputTab = document.getElementById('inputTabuada').value
    btnok = document.getElementById('btnok')
    if (inputTab == '' || inputTab == '0'){
        btnok.disabled = true
    } else {
        btnok.disabled = false
    }
})

// captura os valores
inputTab = document.getElementById('inputTabuada')
divResp = document.getElementById('resp').style.textAlign = 'left'
function resolveTabuada(){
    // iniciada...
    divResp = document.getElementById('resp')
    inputTab = document.getElementById('inputTabuada')
  
    divResp.innerHTML = `<p>Exibindo a tabuada do ${inputTab.value}</p>`
    num = Number(inputTab.value)
    
    for (i=1; i <= 10; i++){
        result = Number(i) * num
        divResp.innerHTML += `<p>${num} X ${i} = <strong>${result}</strong></p>`
    }
}



