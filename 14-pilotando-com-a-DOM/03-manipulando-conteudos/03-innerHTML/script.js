// innerHTML: permite adicionar HTML diretamente do JavaScript

const element = document.querySelector('h1');
const element02 = document.querySelector('span');

element.innerHTML = 'Testando <mark style="background: skyblue">Isso é um H2 em um Span</mark>'

element02.innerHTML = 'Isso é um <em>input</em> dentro de um <em>span</em> <input type="text">'