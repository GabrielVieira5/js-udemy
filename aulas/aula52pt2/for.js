//for padrão: 
console.log('FOR padrão: ')
for(let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`)
}

//for que decrementa: 
console.log('FOR que decrementa:')
for(let i = 5; i >= 0; i--){
    console.log(i)
}

console.log('FOR para arrays:')
const carros = ['Senna', '911', 'Civic'];

for(let i = 0; i < carros.length; i++){
    console.log(carros[i])
}

//no caso desse, nunca pode ser >= ou  <=, pois ai passaria do numero certo do array.












/*ESTRUTURA DE FOR:
-serve principalmente para criar funçoes que sao repetidas

USAMOS for(){} para criar:
dentro de () colocamos, geralmente: let i = 0 (i = variavel de controle), separamos por ;, colocamos i = (onde vai parar) e depois*/