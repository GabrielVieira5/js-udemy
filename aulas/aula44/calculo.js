const form = document.querySelector('.formulario');

form.addEventListener('submit', function teste (e){
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#input-teste-4');
    const inputAltura = e.target.querySelector('#input-teste-3');
    const peso = (Number(inputPeso.value));
    const altura = (Number(inputAltura.value));

    if (!peso){
        return console.log('Peso inválido')
    } else if (!altura){ 
        return console.log('Altura inválida')
    } else {
        return console.log('deu certo')
    }
    });

function criar (){
    const p = createElement('p'); //vai criar o elemento que está dentro de ()

}

function setResultado (result){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = (''); //LIMPA O HTML DESSA PARTE
    p.innerHTML = 'Legal'; //Adiona conteudo ao elemento
    resultado.appendChild(p); //diz que o elemento que esta entre () é filho (esta dentro) do que foi selecionado que no caso é RESULTADO
    
}

teste();