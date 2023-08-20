const nome = 'Gabriel';
const sobrenome =  'Vieira';
const idade = 17;
const peso = 90;
const altura = 1.75;
let anoNascimento = (2023 - idade);
let imc = peso/(altura*altura)

console.log('Olá, me chamo ', nome, sobrenome, ' tenho ', idade, ' de idade ', ' sou um futuro dev e fisiculturista de ', peso, 'KG e tenho ', altura, ' meu IMC é ', imc, ' e nasci em ', anoNascimento);
console.log('Agora outra forma de fazer a mesma coisa acima mas de maneira maais facil')
console.log(`Olá, me chamo ${nome} ${sobrenome} sou atleta de fisiculturismo e tenho ${idade} anos de idade, peso ${peso} KG, e tenho ${idade} de idade, e tambem tenho ${altura}m de altura, sou nascido no ano de ${anoNascimento} e meu IMC é ${imc}`)
