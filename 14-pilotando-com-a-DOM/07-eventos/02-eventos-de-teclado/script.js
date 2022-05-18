// Eventos de teclado
const input = document.querySelector('input');
const target = document.querySelector('#target');

input.onkeyup = function(){
    if(input.value == ''){
        console.log('Não tem nada aqui');

    } else {
        console.log(input.value, input.value.length);
        input.oninput = function(){
            target.innerHTML = `${input.value}: ${input.value.length}`
        }  
        
    }

    target.style.hidden = false;/*  */

}
/* 
    onkeyDown => quando a tecla baixar
    onkeyup => quando a tecla levantar
    onkeypress = quando a tecla for pressionada: não é mais usada

*/
