const num1 = Number(prompt('Digite o seu número: '));
const num1tit = document.getElementById('num-prin');
const texto = document.getElementById('texto1')

num1tit.innerHTML = num1;
texto.innerHTML += `Seu número mais 2 é ${num1+2} <br>`;
texto.innerHTML += `Seu número menos 2 é ${num1-2} <br>`;
texto.innerHTML += `Seu número arredondado para baixo é: ${Math.floor(num1)} <br>`;
texto.innerHTML += `Seu número arredondado para cima é: ${Math.ceil(num1)} <br>`;


//document.body.innerHTML = num1
