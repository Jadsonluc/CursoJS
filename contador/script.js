function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    if ( ini.value.length ==0 || fim.value.length == 0 ||pas.value.length == 0 ) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else if(pas.value <= 0) {
        window.alert('Valor de passo inválido, vamos iniciar com passo =1!')
        pas.value = 1
    }
 
else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        for(var c = i; c<=f; c +=p ){
            res.innerHTML += `${c}, `}

         if(c>=f) {
            for (var c = i; c>=f; c-=p){
                res.innerHTML+=`${c}, `
            }
            
        }
        res.innerHTML += `!`
        } 
    }
 
            
        

