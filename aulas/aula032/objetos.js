function machine (nome, posicao, numero){
    return{
        nome: nome,
        posicao: posicao,
        numero: numero
    }
}

const pessoa1 = machine('Neuer', 'Goleiro', '01');

console.log(`O jogador ${pessoa1.nome}, que joga na posição ${pessoa1.posicao}, e usa numero ${pessoa1.numero}`);

//SEGUNDA PARTE

const jogador = {
    nome: 'Vieira',
    numero: 1,
    posicao: 'lateral',

    mudanca(){
        this.numero++
    },
    locutor(){
        console.log(`O jogador ${this.nome} mudou sua camisa de ${this.numero}`)
        this.mudanca()
        console.log(`para a camisa de numero${this.numero}`)
    }
}

jogador.locutor();