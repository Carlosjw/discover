let target = document.querySelector("#target")

let periodos = {
    primeraSemana: 30,
    segundaSemana: 100,
    terceiraSemana: 1000,
    quartaSemana: 10000,
    segundoETerceiroMes: 100000,
    segundoTrimestre: 30000,
    terceiroTrimestre: 15000
}

// gerando array com as propriedades do objeto
let ages = Object.values(periodos);

console.log(ages);

ages.forEach(age => {
    target.innerHTML += age + "</br>";
})