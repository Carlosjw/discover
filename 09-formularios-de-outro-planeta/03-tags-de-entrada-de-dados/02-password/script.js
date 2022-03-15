let pass = document.getElementById("senhakey");
let showPass = document.getElementById("showPass");

pass.oninput = function(event){
    showPass.innerHTML = pass.value;
}