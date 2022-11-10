let week = 7;

let firstWeek = 30;
let secondWeek = 100;
let thirdWeek = 1000;
let fourthWeek = 10000;
let secondAndThirdMonth = 100000;
let secondQuarter = 30000;
let thirdQuarter = 15000;

// Pegando botao
let btn = document.querySelector("#btn");
// Pegando valor do input
let userData = document.querySelector("#qtd");
// Pegando campo dia alvo
let dayData = document.querySelector("#dayData");

// Pegando todas as descrições
let descriptionsValues = document.querySelectorAll(".descricao");

btn.addEventListener("click", function(){
  dayData.innerHTML = userData.value;
  console.log(userData.value);
})

console.log(descriptionsValues)

descriptionsValues.forEach(valueItem => {
    console.log(valueItem.innerText);
})