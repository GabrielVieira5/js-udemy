const elementos = [
    {tag: 'h1', texto:'Bem-vindo'}, //0
    {tag: 'p', texto:'Eu sou Gabriel Vieira'}, //1
    {tag: 'footer', texto: 'Fim.'}, //2
    {tag: 'div', texto: 'Formula1'} //3
]

function machine(){
    const area = document.querySelector('.container');
    
    for(let i = 0; i < elementos.length; i++){
        console.log(elementos[i].tag)
        console.log(elementos[i].texto)
        
    }
}

machine()