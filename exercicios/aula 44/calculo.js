function calcular() {
    const form = document.querySelector('.formulario');
    const laele = [];

    function event(evento){
        evento.preventDefault();

        let peso = document.querySelector('#input-teste-4');
        let altura = document.querySelector('#input-teste-3');

        let resultado = (peso.value)/((altura.value)*(altura.value))
        

        if (resultado < 18) {
            return document.querySelector('.texto').innerHTML = (`Seu IMC total é de ${resultado} e você está abaixo do peso`)
        } else if (resultado >=18 && resultado <25){
            return document.querySelector('.texto').innerHTML =(`Seu IMC total é de ${resultado} e você está peso no peso normal`)
        } else if (resultado >=25 && resultado < 30) {
            return document.querySelector('.texto').innerHTML =(`Seu IMC total é de ${resultado} e você está em sobrepeso`)
        } else if (resultado >=30 && resultado < 35) {
            return document.querySelector('.texto').innerHTML =(`Seu IMC total é de ${resultado} e você está em obesidade grau 1`)
        } else if (resultado >=35 && resultado < 40) {
            return document.querySelector('.texto').innerHTML =(`Seu IMC total é de ${resultado} e você está em obesidade grau 2`)
        } else if (resultado > 40) {
            return document.querySelector('.texto').innerHTML =(`Seu IMC total é de ${resultado} e você está em obesidade grau 3`)
        } else {
            return document.querySelector('.texto').innerHTML = ('VALOR INFORMADO INVALIDO')
        }
    }

    form.addEventListener('submit', event)

}
calcular();
