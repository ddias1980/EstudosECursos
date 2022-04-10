var hora = new Date()
agora = hora.getHours()

console.log(`Agora são exatamente ${agora} horas`)
if (agora < 12 ) {
    console.log('bom dia')
} else if ( agora <= 18 ) {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}
