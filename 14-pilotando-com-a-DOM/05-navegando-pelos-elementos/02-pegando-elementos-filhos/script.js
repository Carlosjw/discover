// Navegando pelos elementos

// childNodes: pega espaços vazios 
const element = document.querySelector('body');
console.log(element.childNodes); // nodes

// children: HTML Collection => não pega os espaços vazios
console.log(element.children);

// firstChild: leva em consideração espaços vazios
console.log(element.firstChild)

// firstElementChild: não leva em consideração espaços vazios
console.log(element.firstElementChild)

// lastChild e lastElementChild: mesma regra dos elementos acima
console.log(element.lastChild);
console.log(element.lastElementChild);
