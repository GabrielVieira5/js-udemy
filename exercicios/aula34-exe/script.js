function tarefa (){
    const form = document.querySelector('.formulario');
    const pessoas = [];

    /*form.onsubmit = function (evento){ //quando o form for enviado
        evento.preventDefault(); //Fazer com que a pagina nao atualize ja que o padrao é que (form.onsubmit) atualize a página e faz sumir tudo
        console.log('Deu certo!!'); FORMA MENOS USADA*/

        function eventoForm (evento) {
            evento.preventDefault();
            const nome = document.querySelector('.nome')
            const sobrenome = document.querySelector('.sobrenome')
            const peso = document.querySelector('.peso')
            const altura = document.querySelector('.altura')
            
            pessoas.push(`Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Altura: ${altura.value}, Peso: ${peso.value} <br>`);
            return document.querySelector('.resultado').innerHTML = pessoas

            
            
            
            //(`Meu nome é ${nome.value, sobrenome.value} eu tenho ${altura.value} e peso ${peso.value}`)

        }

        form.addEventListener('submit', eventoForm);
    }


tarefa();