const elementos = [
    {tag: 'h1', texto:'Bem-vindo'}, //0
    {tag: 'p', texto:'Eu sou Gabriel Vieira'}, //1
    {tag: 'footer', texto: 'Fim.'}, //2
    {tag: 'div', texto: 'Formula1'} //3
]


const container = document.querySelector('.container');
//querySelector seleciona so um e com um "All" no fim seleciona todos
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    console.log(elementos[i]);
    let {tag, texto} = elementos[i]; //via desustruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);

}
container.appendChild(div);


















// function machine(){
//     const area = document.querySelector('.container');
    
//     for(let i = 0; i < elementos.length; i++){
//         console.log(elementos[i].tag);
//         console.log(elementos[i].texto);
        
//         area.innerHTML += `${elementos[i].tag} ${elementos[i].texto} <br>`

        
//     }
// }

// machine()