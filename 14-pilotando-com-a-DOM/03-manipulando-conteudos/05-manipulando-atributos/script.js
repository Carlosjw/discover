// Manipulando atributos
// Atributos: criando atributos com setAttribute

const header = document.querySelector('header');
header.setAttribute('id', 'header') // id: nome do atributo, header: propriedade do atributo criado

const headerID = document.querySelector('#header');

console.log(headerID)

// pegando o atributo com getAttibute

console.log(headerID.getAttribute('id'));

// removendo atributo
header.removeAttribute('id');