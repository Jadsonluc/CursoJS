let amigo = {nome: 'Ari',
 sexo: 'M', 
 peso: 85,
  engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)