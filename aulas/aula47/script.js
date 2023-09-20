const dia = new Date('10-11-2005');
let diaSemana = dia.getDay();
let text;

switch (diaSemana){
    case 0: 
    text = diaSemana = 'Domingo'
    break;

    case 1: 
    text = diaSemana = 'Segunda'
    break;

    case 2: 
    text = diaSemana = 'Terça'
    break;

    case 3: 
    text = diaSemana = 'Quarta'
    break;

    case 4: 
    text = diaSemana = 'Quinta'
    break;

    case 5: 
    text = diaSemana = 'Sexta'
    break;

    case 6: 
    text = diaSemana = 'Sábado'
    break;
}

console.log(text)