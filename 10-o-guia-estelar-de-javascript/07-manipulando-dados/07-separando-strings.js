// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do Array. Depois disso, transforme o array em um texto e onde eram espaços, colo _

let phrase = 'Eu quero viver o Amor!';
let myArray = phrase.split(" "); // [ 'Eu', 'quero', 'viver', 'o', 'Amor!' ]
console.log(myArray)

let phaseWithUnderscore = myArray.join("_");
console.log(phaseWithUnderscore); // Eu_quero_viver_o_Amor!
