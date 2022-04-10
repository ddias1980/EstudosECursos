function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12 ){
        // bom dia
        msg.innerHTML += ' - Bom dia!!'
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = 'rgb(177,197,114)'
    } else if (hora <= 18){
        // boa tarde
        msg.innerHTML += ' - Boa tarde!!'
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = 'rgb(242,160,62)'
    } else {
        // boa noite
        msg.innerHTML += ' - Boa noite!!'
        img.src = "fotonoite.png"
        document.body.style.backgroundColor = 'rgb(139,139,139)'
    }
}
