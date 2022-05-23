var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são ${hora} horas`)
if (hora < 13 && hora>4) {
    console.log ('Bom dia')
} else if (hora < 18 && hora>=13) {
    console.log('Boa tarde')
} else if ( hora>= 18 && hora<=24){
    console.log('Boa noite')
} else if (hora >=00 & hora<5){
    console.log('Boa madrugada')
}