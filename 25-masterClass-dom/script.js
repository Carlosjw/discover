let target = document.querySelector("#target");
let btn = document.querySelector("#btn");
let randomList = document.querySelector("#lista");
let elementos = document.querySelectorAll('.lista');
let targetElements = document.querySelectorAll('.new-lista');

let paragraph = document.querySelector("p");

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

let family = ["Núbia", "Bambú", "Heldin", "Deleon", "Ruth", "Carlos", "Manoel", "Joelma", "Suely", "Solange"]

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

targetElements.forEach((targetElement, index )=> {
    targetElements[index].innerText += family[index] + " Lima";
    targetElements[index].style.padding = "10px"
    targetElements[index].style.display = "flex"
    targetElements[index].style.alignItems = "center"    
    targetElements[index].style.justifyContent = "center"
    targetElements[index].style.width = "100%";
    targetElements[index].style.marginBottom = "5px";
    targetElements[index].style.borderRadius = "4px";
    targetElements[index].style.backgroundColor = "skyblue";
    targetElements[index].style.boxShadow = "inset 2px 3px 6px rgba(0, 0, 0, 0.5)";

})

console.log(elementos)

console.log(targetElements)

console.log(Math.random())

btn.onclick = function() {
    if(paragraph.style.display == 'flex'){
        paragraph.style.display = 'none';
        randomList.style.display = 'none';
    } else {
        paragraph.style.display = 'flex'
        randomList.style.display = 'flex'
        paragraph.style.padding = "20px";
        paragraph.style.borderRadius = "5px";
        paragraph.style.backgroundColor = "skyblue";
        paragraph.style.boxShadow = "inset 2px 3px 6px rgba(0, 0, 0, 0.5)";
    }
}