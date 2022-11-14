let mainParent = document.querySelector("body");
let parentDiv = document.querySelector("#container");
let target = document.querySelector("#target")

// definindo semana
let hourDay = 24;
let week = 7;
let hoursWeek = week * hourDay;
console.log(hoursWeek)

// resultado exame
let result = 230.91;

let primeraSemana = 30;
let segundaSemana = 100;
let terceiraSemana = 1000;
let quartaSemana = 10000;
let segundoETerceiroMes = 100000;
let segundoTrimestre = 30000;
let terceiroTrimestre = 15000;

let unkNown = 900 / week

let myName = "Carlos Lima";

// definindo um/ml
let dayFirstWeek = primeraSemana / week // 4.285714285714286
let daySecondWeek = segundaSemana / week // 14.285714285714286
let dayThirdWeek = terceiraSemana / week // 142.85714285714286

let weekBaby = result / dayThirdWeek // 16.1637

let restWeekBaby = result % daySecondWeek

console.log(` Sobra: ${week * 0.6163699999999999}`)

console.log(weekBaby)





mainParent.style = "display: flex; flex-direction: column; align-items: center; justify-content: center; background: gray;"

let childDiv = document.createElement("div");
childDiv.style = "width: 200px; height: 400px; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: silver; border-radius: 10px; box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5); overflow: auto";

mainParent.append(childDiv)

let ulChild = document.createElement("ul");
ulChild.setAttribute("id", "my-ul");
childDiv.append(ulChild);

let liChild = document.createElement("li");

console.log("hello")