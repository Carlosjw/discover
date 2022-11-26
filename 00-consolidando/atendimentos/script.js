let month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

let d = new Date();

document.getElementById("week-day").innerHTML = week[d.getDay()];


let data = new Date()
console.log(data.toLocaleString('pt-BR', {weekday: 'long'}))