let pass = document.getElementById("senhakey");
let viewPass = document.getElementById("showPass");

pass.oninput = function(event){
    viewPass.innerHTML = pass.value;
}