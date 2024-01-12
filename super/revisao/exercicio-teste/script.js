function machine () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];


    form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        resultado.innerHTML += (`Olá ${nome.value} ${sobrenome.value} de peso: ${peso.value} e altura: ${altura.value}`)


        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas)
    }

}

machine();