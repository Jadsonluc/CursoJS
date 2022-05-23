function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora =00

    if (hora > 4 && hora <= 12){
        msg.innerHTML = (`São ${hora} horas, Bom dia!`)
        img.src = 'manha.png'
        document.body.style.background = '#9aadb3'
    } else if (hora > 12 && hora <= 17){
        msg.innerHTML = (`São ${hora} horas, Boa tarde!`)
        img.src = 'tarde.png'
        document.body.style.background = '#df7c48'
    } else if (hora > 17 && hora <= 23){
        msg.innerHTML = (`São ${hora} horas, Boa noite!`)
        img.src = 'noite.png'
        document.body.style.background = '#53294b'
    } else if(hora >= 0 && hora <= 4){
        msg.innerHTML = (`São ${hora} horas, Boa madrugada!`)
        img.src = 'madrugada.png'
        document.body.style.background = '#646464'
    }

}

