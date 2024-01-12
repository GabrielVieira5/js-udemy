function calcular (){
    const form = document.querySelector('.form');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    form.addEventListener('submit', calculo)

    function calculo (event){
        event.preventDefault();

        console.log(peso.value)
        console.log(altura.value)

        const resultado = peso.value / altura.value **2;

        console.log(resultado)

        if(resultado < 16.9) {
            console.log('gay!!')
        }
        if(resultado > 17 && resultado < 18.4) {
            console.log('funciona ja filhao')
        }
        else {
            console.log('Por favor, verifique os valores novamente!')
        }
    }
}

calcular();