const periodo = [30, 100, 1000, 10000, 100000, 30000, 15000]

// semana
let week = 7;

// array destructuring
const [firstWeek, secondWeek, thirdWeek, fourthWeek, secondAndThirdMonth, secondQuarter, thirdQuarter] = periodo;

// pegando todas as descrições
let descriptionsValues = document.querySelectorAll(".descricao");



console.log(descriptionsValues)

descriptionsValues.forEach(valueItem => {
    console.log(firstWeek);
})