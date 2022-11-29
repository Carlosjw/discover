// importando modulos de changes
// import domChanges from "./modules/dataCalcules.js";

let dayWeek = document.getElementById("week-day");

// cards do footer
let cardsInfo = document.querySelectorAll(".card-info"); // main

// tipo de atendimento
let atendTypes = document.querySelectorAll(".atend-type");

// número da senha
let atendPass = document.querySelectorAll(".atend-pass");

let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let periodo = document.querySelector("#periodo");
let updateHours = document.querySelector("#update-hours");

let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

// definindo data principal
let data = new Date();

// configurando painel de datas
setInterval(()=>{
    //declaranda a data no escopo do intervalo
    let data = new Date();

    // pegando dia da semana
    dayWeek.innerHTML = week[data.getDay()];

    // pegando dia do mês
    day.textContent = data.toLocaleString("pt-BR", {day:"numeric"})

    // pegando mês
    month.textContent = months[data.getMonth()];

    // pegando o ano
    year.textContent = data.getFullYear()

    // verificando se é manhã ou tarde
    if(data.getHours() >= 5 && data.getHours() < 12){
        periodo.textContent = "Bom dia!";
    } else if(data.getHours() >= 12 && data.getHours() < 18){
        periodo.textContent = "Boa tarde!"
    } else{
        periodo.textContent = "Boa noite!"
    }

    // rodando hora em tempo real
    updateHours.textContent = data.toLocaleTimeString('pt-BR'); 
}, 1000);

// TIPOS DE ATENDIMENTOS
let tiposAtendimentos = ["PRIORIDADE", "CADÚNICO", "ZONA RURAL"]

// SENHAS
let priorityPas = []
let cadPass = []
let sibecPass = []
let ruralPass = []

for(let i = 1; i <= 600; i++){
    if(i >= 1 && i <= 100){
        cadPass.push(i);
    }else if(i > 100 && i <= 200){
        sibecPass.push(i);
    }
}

cardsInfo.forEach(cardInfo => {
    cardInfo.style = "display: flex; align-items: center; justify-content: center;"
})

tiposAtendimentos.forEach((tipoAtendimento, index) => {
    atendTypes[index].textContent = tipoAtendimento;
})

console.log(sibecPass.length)
