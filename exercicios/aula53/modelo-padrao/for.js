const elementos = [
    {tag: 'p', texto: 'Oi sou o Vieira'}, //0
    {tag: 'div', texto: 'Frase2'}, //1
    {tag: 'footer', texto: 'Frase3'}, //2
    {tag: 'section', texto:'Frase 4'} //3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
   
    let { tag, texto } = elementos[i];
    let criar = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);


    criar.innerHTML = texto;
    div.appendChild(criar);
    criar.appendChild(textoCriado)
    console.log(tag);
}

container.appendChild(div);







