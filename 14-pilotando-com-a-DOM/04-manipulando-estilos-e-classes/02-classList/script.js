// Alterando estilos
// classList

const element = document.querySelector('body');

//adiconando classe
element.classList.add('active', 'green') // adicionando 2 classes

console.log(element.classList)

element.classList.remove('active'); //remove

// toggle: procura determinada classe, caso ela exista, será removida, caso não exista, será criada.
element.classList.toggle('active'); // adiciona