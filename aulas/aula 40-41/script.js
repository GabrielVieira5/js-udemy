const hora = 42;
const nome = 'Vieira';


if(hora >= 0 && hora <= 11){
    console.log(`Bom dia, ${nome}`);
} else if (hora >=12 && hora <=18){
    console.log(`Bom tarde, ${nome}`);
} else if (hora >=19 && hora <=23){
    console.log(`Bom noite, ${nome}`);
} else {
    console.log('Horário INVALIDO')
}