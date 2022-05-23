var num = document.getElementById('fnum')
var sel = document.getElementById('flista')
var res = document.getElementById('res')
var lista = []
lista.sort()

//var pose = lista.indexOf(Number(n)) 

function adicionar(){
     if (num.value.length == 0 || num.value < 1 || num.value > 100) {
    window.alert('Valor inválido')
}/* else if (pose != -1){
    window.alert('Valor duplicado')
} */else  {
    var n = Number(num.value)
    lista.push(n)
    var item = document.createElement('option')
    item.text = `${n} foi adicionado`
    sel.appendChild(item)
res.innerHTML = ''
}
}
function finalizar(){
     if (lista.length == 0 ){
        window.alert('Adicione valores a lista')
    } else { var soma = 0
        for (var x = 0; x < lista.length; x++){
            soma += Number(lista[x])
        res.innerHTML =  `<p>O número de elementos da lista é ${lista.length}</p>
        <p>O primeiro elemento da lista é ${lista[0]}</p>
        <p>O último elemento da lista é ${lista.slice(-1)[0]}</p>
        <p>A soma de todos o valores é ${soma}</p>
        <p>A média dos elementos é ${soma/lista.length}</p>`
        num.value=''

    }}
}
function apagar(){
    res.innerText = ''
    num.value = ''
    sel.innerHTML =''
    
    lista.push(n) = ''
}