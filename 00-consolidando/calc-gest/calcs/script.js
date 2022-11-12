let parentDiv = document.querySelector("#container");
let target = document.querySelector("#target")


let primeraSemana = 30;
let segundaSemana = 100;
let terceiraSemana = 1000;
let quartaSemana = 10000;
let segundoETerceiroMes = 100000;
let segundoTrimestre = 30000;
let terceiroTrimestre = 15000;


// resultado exame
let result = 30000

let firstWeek = result >= primeraSemana && result < segundaSemana;
let secondWeek = result >= segundaSemana && result < terceiraSemana;
let thirdWeek = result >= terceiraSemana && result < quartaSemana;
let fouthWeek = result >= quartaSemana && result < segundoETerceiroMes;
let secondAndThirdMonth = result <= segundoETerceiroMes && result > segundoTrimestre;
let secondQuarter = result < segundoETerceiroMes && result > terceiroTrimestre;
let thirdQuarter = result <= terceiroTrimestre && result >= 500;


let week = 7;

// gerando array com as propriedades do objeto
// let ages = Object.values(periodos);




/* for(let indice = 0; indice < ages.length; indice++){
    console.log(indice, ages[indice])
} */

switch(result){
    case firstWeek:
        console.log("Primeira Semana");
        break;
    case secondWeek:
        console.log("Segunda Semana");
        break;
    case thirdWeek:
        console.log("Terceira Semana");
        break;
    case fouthWeek:
        console.log("Quarta Semana");
        break;
    case secondAndThirdMonth:
        console.log("Segundo e Terceiro Mês");
        break;
    case secondQuarter:
        console.log("Segundo Trimestre");
        break;
    case thirdQuarter:
        console.log("Terceiro Trimestre");
        break;
    default:
        console.log("Você não está grávida");
        break;
}
