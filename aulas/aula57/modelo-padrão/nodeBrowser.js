//seleção de body
const bodyselect = document.body;
const bodyStyle = getComputedStyle(bodyselect);
const bodyColor = bodyStyle.backgroundColor; //armazenou a cor de fundo de body

//seleção de texto:
const textSelect = document.querySelector('p');
const textStyle = getComputedStyle(textSelect);
const textColor = textStyle.backgroundColor;


