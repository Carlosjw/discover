let number01 = document.getElementById("number01");
let number02 = document.getElementById("number02");

let btnSomar = document.getElementById("somar");

let btnSubtrair = document.getElementById("subtrair");

let teste1 = document.getElementById("teste01");
let teste2 = document.getElementById("teste02");
let teste3 = document.getElementById("somas-numbers");
let teste5 = document.getElementById("teste03");
let teste6 = document.getElementById("teste04");
let teste4 = document.getElementById("sub-numbers");

number01.oninput = function(event){
    teste1.innerHTML = number01.value;
}

number02.oninput = function(event){
    teste2.innerHTML = number02.value;
}

number01.oninput = function(event){
    teste5.innerHTML = number01.value;
}

number02.oninput = function(event){
    teste6.innerHTML = number02.value;
}

btnSomar.addEventListener('click', function(){
    teste3.innerHTML = parseInt(number01.value) + parseInt(number02.value);
})

btnSubtrair.addEventListener('click', function(){
    teste4.innerHTML = parseInt(number01.value) - parseInt(number02.value);
})