const text = document.querySelector('h1');
const data = new Date();
//
let dia = data.getDay();
let ano = data.getFullYear();
let mes = data.getMonth();
let hora = data.getHours();
let minuto = data.getMinutes();
let diames = data.getDate();
//
let textData;

switch (dia){
    case 0:
    dia= 'Domingo';
    break;
    case 1:
    dia= 'Segunda-feira';
    break;
    case 2:
    dia= 'Terça-feira';
    break;
    case 3:
    dia= 'Quarta-feira';
    break;
    case 4:
    dia= 'Quinta-feira';
    break;
    case 5:
    dia= 'Sexta-feira';
    break;
    case 6:
    dia = 'Sábado';
    break;
}

switch (mes){
    case 0:
    mes = 'Janeiro';
    break;
    case 1:
    mes = 'Fevereiro';
    break;
    case 2:
    mes = 'Março';
    break;
    case 3:
    mes = 'Abril';
    break;
    case 4:
    mes = 'Maio';
    break;
    case 5:
    mes = 'Junho';
    break;
    case 6:
    mes = 'Julho';
    break;
    case 7:
    mes = 'Agosto';
    break;
    case 8:
    mes = 'Setembro';
    break;
    case 9:
    mes = 'Outubro';
    break;
    case 10:
    mes = 'Novembro';
    break;
    case 11:
    mes = 'Dezembro';
    break;
}



text.innerHTML = (`Hoje é ${dia}, ${diames} de ${mes} do ano de ${ano}, a hora agora é: ${hora}:${minuto}`);

