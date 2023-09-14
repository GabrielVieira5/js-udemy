function calcular() {
    const form = document.querySelector('.formulario');
    const laele = [];

    function event(evento){
        evento.preventDefault();

        const pesol = document.querySelector('#input-teste-4');
        const peso = Number(pesol)
        const altural = document.querySelector('#input-teste-3');
        const altura = Number(altural)

        const resultado = Number((altura*altura)/peso)
        laele.push(resultado)

        console.log(resultado)
    }
    form.addEventListener('submit', event)
}

calcular();