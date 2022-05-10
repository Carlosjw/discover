// Navegando pelos elementos
const element = document.querySelector('header');
// nextSibling: leva em consideração espaços vazios
console.log(element.nextSibling)
// nextElementSibling: não leva em consideração espaços vazios
console.log(element.nextElementSibling)



// previousSibling previousElementSibling: mesma regra
console.log(element.previousSibling);
console.log(element.previousElementSibling);