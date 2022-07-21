// innerHTML: permite adicionar HTML diretamente do JavaScript

const btn01 = document.querySelector('#btn01');
const btn02 = document.querySelector('#btn02');
const btn03 = document.querySelector('#clearElements');
const btn04 = document.querySelector('#btn04');

const btn05 = document.querySelector('#witHeight');

const flexBody = document.querySelector('#flexBody');

const body = document.querySelector('#bode');

const element = document.querySelector('h1');
const element02 = document.querySelector('span');

btn01.addEventListener('click', function(){
    element.innerHTML = 'Testando <mark style="background: skyblue">Isso é um H2 em um Span</mark>'
});

btn02.addEventListener('click', function(){
    element02.innerHTML = 'Isso é um <em>input</em> dentro de um <em>span</em> <input type="text">'
})

btn03.addEventListener('click', function(){
    element.style.display = 'none';
    element02.style.display = 'none';
})

btn04.addEventListener('click', function(){
    element.style.display = 'flex';
    element02.style.display = 'flex';
})

flexBody.addEventListener('click', function(){
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
})

btn05.addEventListener('click', function(){
    body.style.width = '200px';
    body.style.height = '200px';

})






