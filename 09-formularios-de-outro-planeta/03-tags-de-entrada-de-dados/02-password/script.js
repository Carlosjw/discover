let pass = document.getElementById("senhakey");
let viewPass = document.getElementById("showPass");

pass.oninput = function(){
    viewPass.innerHTML = pass.value;
}