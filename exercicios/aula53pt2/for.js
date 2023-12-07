const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'} //3
];

const container = document.querySelector('.container'); //seleciona o que tem a classe container no html
const div = document.createElement('div'); //cria o elemento div mas nao o adiciona

for(let i = 0; i < elementos.length; i++){ 
    let {tag, texto} = elementos[i]; //seleciona os objetos tag e texto, dentro de elementos no array do numero definido pelo for (i)
    let tagCriada = document.createElement(tag); //cria o elemento selecionado no momento pela configuração da linha de cima
    let textoCriado = document.createTextNode(texto); //pega o texto e altera como innerHTML, tambem funciona com innerText, creatTextNode(como é o caso)
    
    //em outra forma como innerText, seria: 
    //tagCriada.innerText = texto; (CASO FOSSE USADO ESSE, NAO PRECISARIA DA LINHA ABAIXO)
    tagCriada.appendChild(textoCriado); //define o texto acima como filho de tagCriada
    div.appendChild(tagCriada); //define tagCriada como filho de div
    
}

container.appendChild(div); //define div como filho de containers