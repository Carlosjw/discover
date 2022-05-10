let password = document.querySelector('#pass');
let showPass = document.querySelector('#eye-closed');

let showedPass = document.querySelector('#show-passed');

password.oninput = function(event){
    showedPass.innerHTML = password.value;
}