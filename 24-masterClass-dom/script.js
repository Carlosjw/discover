let target = document.querySelector("#target");
let btn = document.querySelector("#btn");
let elementos = document.querySelectorAll('.lista');

console.log(document)
/* 
    Exibe o documento rederizado como HTML
*/

console.dir(document)
/* 
    Exibe toda a árvore do documento HTML com suas propriedades e atributos
*/
console.log(document.title) // exibe o título da pagina

elementos.forEach((element, index) => {
    target.innerHTML += `${index + 1} => ${element.outerText} ${"</br>"}`
})

console.log(elementos)