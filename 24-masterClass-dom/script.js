 let target = document.querySelector("#target");
let btn = document.querySelector("#btn");
let elementos = document.querySelectorAll('.lista');
let inputs = document.querySelectorAll('input');
let catchInputs = document.querySelector

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
    target.innerHTML += `${index + 1} => ${element.textContent} ${"</br>"}`
})

console.log(elementos)

elementos[0].innerHTML = "<h1>Sou o zero mas sou o um</h1>"

catchInputs.addEventListeners()