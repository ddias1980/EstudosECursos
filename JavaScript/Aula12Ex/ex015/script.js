
document.getElementById('btnok').disabled = true
document.getElementById('inputano').addEventListener("keyup", function(){
    var nameinput = document.getElementById('inputano').value
    if (nameinput == ''){
        document.getElementById('btnok').disabled = true
    } else {
        document.getElementById('btnok').disabled = false
    }
})
/* document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById('btnok').disabled = 'true'
})
    function myfunction(){
        var nameinput = document.getElementById('inputano').value;
        console.log(nameinput)
        if (nameinput == ''){
            document.getElementById('btnok').disabled = true
        } else {
            document.getElementById('btnok').disabled = false
        }
    }
document.getElementById('inputano').setAttribute('onkeyup', "myfunction()")*/
document.getElementById('btnok').setAttribute('onclick', 'verificar()')

function verificar(){
    data = new Date()
    ano = data.getFullYear()
    vlano = document.getElementById('inputano')
    res = document.getElementById('res')

    if (vlano.value.length == 0 || vlano.value == '0' || vlano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        vsexo = document.getElementsByName('radiosex')
        idade = ano - Number(vlano.value)
        //res.innerHTML = `Idade: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (vsexo[0].checked){
            genero = 'H'
            if ( idade < 10){
                img.setAttribute('src', 'img/crianca_h.png')
                //joven
            } else if (idade < 30){
                img.setAttribute('src', 'img/adulto_h.png')
                //jovem
            } else {
                img.setAttribute('src', 'img/idoso_h.png')
                //idoso
            }
            
        } else {
            genero = 'M'
            if ( idade < 10){
                img.setAttribute('src', 'img/crianca_m.png')
                //joven
            } else if (idade < 30){
                img.setAttribute('src', 'img/adulto_m.png')
                //jovem
            } else {
                img.setAttribute('src', 'img/idosa_m.png')
                //idoso
            }
        }
        res.innerHTML = `<p>Genero: ${genero} Idade: ${idade}</p>`
        res.appendChild(img)
    }

}