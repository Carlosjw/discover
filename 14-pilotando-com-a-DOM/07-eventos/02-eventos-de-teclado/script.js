// Eventos de teclado
const input = document.querySelector('input');

input.onkeyup = function(){
    if(input.value == ''){
        console.log('Não tem nada aqui');
    } else {
        console.log(input.value, input.value.length);
    }
}
/* 
    onkeyDown => quando a tecla baixar
    onkeyup => quando a tecla levantar
    onkeypress = quando a tecla for pressionada: não é mais usada

*/
