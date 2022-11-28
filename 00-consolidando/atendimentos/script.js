let dayWeek = document.getElementById("week-day");

let day = document.querySelector("#day");
let month = document.querySelector("#month");
let periodo = document.querySelector("#periodo");
let updateHours = document.querySelector("#update-hours");

let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

let data = new Date();

setInterval(()=>{
    //declaranda a data no escopo do intervalo
    let data = new Date();

    // pegando dia da semana
    dayWeek.innerHTML = week[data.getDay()];

    // pegando dia do mês
    day.textContent = data.toLocaleString("pt-BR", {day:"numeric"})

    // pegando mês
    month.textContent = months[data.getMonth()];

    // verificando se é manhã ou tarde
    if(data.getHours() >= 5 && data.getHours() < 12){
        periodo.textContent = "Bom dia! ";
    } else if(data.getHours() >= 12 && data.getHours() < 18){
        periodo.textContent = "Boa tarde! "
    }

    // rodando hora em tempo real
    updateHours.textContent = data.toLocaleTimeString('pt-BR'); 

}, 1000);