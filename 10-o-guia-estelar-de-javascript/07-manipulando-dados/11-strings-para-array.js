// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação";

console.log(Array.from(word));
/* 
    [
    'm', 'a', 'n', 'i',
    'p', 'u', 'l', 'a',
    'ç', 'ã', 'o'
    ]
*/

let fromString = Array.from(word);
console.log(fromString.sort());
/* 
    [
    'a', 'a', 'i', 'l',
    'm', 'n', 'o', 'p',
    'u', 'ã', 'ç'
    ]
*/

let name = "Solange";
let fromName = Array.from(name);
console.log(fromName)

