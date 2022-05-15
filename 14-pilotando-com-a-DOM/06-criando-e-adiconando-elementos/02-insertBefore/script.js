// adicionando elementos entre elementos
const div = document.createElement('div');
div.innerText = 'Eu sou uma div criada';

// insertBefore
const body = document.querySelector('body');

// elementos antes do qual queremos inserir nosso elemento
const script = body.querySelector('script');

// inserindo elemento
body.insertBefore(div, script); // (nosso elemento, elemento antes do qual será inserido o nosso elemento)

// inserindo após: gambirinha
const header = body.querySelector('header');
body.insertBefore(div, header.nextSibling)