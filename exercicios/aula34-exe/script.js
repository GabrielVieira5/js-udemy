function tarefa (){
    const form = document.querySelector('.formulario');

    form.onsubmit = function (evento){ //quando o form for enviado
        evento.preventDefault(); //Fazer com que a pagina nao atualize ja que o padrao é que (form.onsubmit) atualize a página e faz sumir tudo
        console.log('Deu certo!!');
    }

}
tarefa();