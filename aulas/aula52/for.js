
//o i geralmente é usado nessa situacao, significa index
for (let i = 0; i <= 50; i++){
    console.log(`Essa é a linha ${i}`);
}
console.log('')
//checar se o numero eh par
for(let i = 0; i <=10; i++){
    const par = i % 2 === 0 ? 'par': 'impar';
    console.log(i, par)
}
console.log('')

const frutas = ['Maçã', 'Pera', 'Uva'];
for(let i = 0 ; i < frutas.length; i++){
    console.log(i);
}
