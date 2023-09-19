const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#input-teste-4'); //target, nesse caso, indica que os input foram enviados atraves de 'submit', e se refere aos mesmos.
    const inputAltura = e.target.querySelector('#input-teste-3');

    const peso = Number((inputPeso.value));
    const altura = Number((inputAltura.value));

    if (!peso){ //avalia se o peso é um number(true) ou num NaN(false) 
        console.log('Peso inválido'); 
        return 
    }
    if (!altura){
        console.log('Altura inválida');
        return 
    }

   
    
    function nivelIMC (imc) {
    const nivel = ['Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3', 'Sobrepeso', 'Peso normal', 'Abaixo do peso']
    if (imc >= 39.9) return nivel[2]; 
    if (imc >= 34.9) return nivel[1]; 
    if (imc >= 29.9) return nivel[0]; 
    if (imc >= 24.9) return nivel[3]; 
    if (imc >= 18.5) return nivel[4]; 
    if (imc <18.5) return nivel[5]; 
    }
    const imc= getImc(peso, altura);

    console.log(imc);
    function getImc (peso, altura){
        const imc = peso / altura**2;
        return imc.toFixed(2); //só 2 casas decimais
    }
    const getnivelIMC = nivelIMC(imc);
    console.log(getnivelIMC);
});

function criar () {
    const p = document.createElement('p'); //CRIA UM ELEMENTO DENTRO DE HTML MAS SEM DIRECIONA-LO
    p.classList.add('p-de-resultado');
}

function setResultado (result){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = (''); //LIMPA O HTML DESSA PARTE
    const paragrafo = criar();
    paragrafo

}