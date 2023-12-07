const pessoa1 = {
    nome: 'Gabriel',
    idade: 17,
    endereco: {
        rua: 'Senna',
        numero: 12,
        bairro: 'formula1'
    }
};

//console.log(pessoa1.nome)
 
const {nome: teste, sobrenome = 'Nao informado'} = pessoa1;
const {endereco: {rua, bairro: quebrada}} = pessoa1;

console.log(rua, quebrada)
