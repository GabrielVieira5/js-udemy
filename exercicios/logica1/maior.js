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
    
    if(larg && altu !== Number){
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

function divisivel (num){
    const resultado3 = num % 3;
    const resultado5 = num % 5;

    if (typeof num !== Number){
        return console.log('Por favor, informe um número!')
    }

    if(resultado3 === Math.floor){
        return console.log(`${num} é divisivel por 3 e o resultado é: ${resultado3}`)
    }
    if(resultado5 === Math.floor){
        return console.log(`${num} é divisivel por 5 e o resultado é: ${resultado5}`)
    }

    return console.log('oi')
}

divisivel(3);


