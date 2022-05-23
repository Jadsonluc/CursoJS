var num = [1, 2, 3, 4, 9, 8, 6]
num.push(5,7)
num.sort()
console.log(num)
console.log(`O primeiro elemento da array é ${num[0]}`)
console.log(`O número de elementos da array é ${num.length}`)
pose = num.indexOf()
if (pose == -1) {
    console.log('Elemento não encontrado')
} else {
    console.log(`${pose}º é a posição do elemento `)
}