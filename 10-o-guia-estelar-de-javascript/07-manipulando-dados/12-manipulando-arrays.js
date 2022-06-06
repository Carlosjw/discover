// Manipulando arrays


let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs");

// adicionar no começo do array
techs.unshift("sql")

// remove do fim
// techs.pop()

// remove do começo
// techs.shift()

// pegas somento alguns elementos do Array
// console.log(techs.slice(1, 3))

// remove 1 ou mais itens em qualquer posição do Array
// techs.splice(1, 3)

// encontrar a posição de um elemento no Array
let index = techs.indexOf('css')

console.log(index);