// Eventos
// Argumento event
const input = document.querySelector('input');

input.onkeydown = function(event){
    console.log(event)
    console.log(input.onkeydown)
}