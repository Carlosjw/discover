// Criando e adicionando elementos

// createElement
const div = document.createElement('div'); // criando elemento
div.innerText = 'Olá, eu mesmo!' // adcionando conteúdo ao elemento

const p = document.createElement('p');
p.innerText = 'Eu sou um págrafo criado';

const body = document.querySelector('body'); // selecionando pai

// inserindo elemento no final do elemento pai => append
body.append(p);

// adicionando elemento no começo do elemento pai => prepend
body.prepend(div);