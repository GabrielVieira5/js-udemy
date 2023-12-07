const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'} //3
];

for(let i = 0; i < elementos.length; i++){
    const armazenaTag = elementos[i].tag;
    const armazenaText = elementos[i].texto;

    document.querySelectorAll('.container');
    createElement(armazenaTag);

    console.log(armazenaTag);
    console.log(armazenaText)

    
}


