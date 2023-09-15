const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
});
function setResultado (result){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = (''); //LIMPA O HTML DESSA PARTE
    const p = document.createElement('p'); //CRIA UM ELEMENTO DENTRO DE HTML MAS SEM DIRECIONA-LO
    p.innerHTML = 'Legal'; //Adiona conteudo ao elemento
    resultado.appendChild(p); //diz que o elemento que esta entre () é filho (esta dentro) do que foi selecionado que no caso é RESULTADO
    
}