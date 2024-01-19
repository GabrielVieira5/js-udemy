console.log('EXERCICIO DE LÓGICA 1: ')

function numero (num1, num2) {
    if(num1 > num2){
        return console.log(`${num1} é maior que ${num2}`);
    }
    else {
        return console.log(`${num2} é maior que ${num2}`);
    }
}

numero(1, 5)

console.log('')
console.log('EXERCICIO DE LÓGICA 2: ')

function ePaisagem (larg, altu){
    
    if(typeof larg !== 'number' || typeof altu !== 'number') {
        return console.log('Por favor digite em números')
    }

    if (larg > altu) {
        return console.log('A imagem está em paisagem');
    }
    return console.log('a imagem não está em paisagem');
}

ePaisagem(555, 900)

console.log('')
console.log('EXERCICIO DE LÓGICA 3: ');

function divisivel (num) {
    if (num % 3 === 0 && num % 5 !== 0){
        return console.log(`O número informado é divisivel por 3`);
    }

    if (num % 5 === 0 && num % 3 !== 0) {
        return console.log(`O número informado é divisivel por 5`);
    }

    if(num % 3 === 0 || num % 5 === 0){
        return console.log(`O número informado é divisivel por ambos`);
    }

    else{
        return console.log(`Número informado não é válido ou não divisivel`);
    }
}

divisivel(17)

