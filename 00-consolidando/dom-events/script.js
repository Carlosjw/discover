let mainContent = document.querySelector("body");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    mainContent.classList.toggle('mainContent');
    // btn.classList.toggle('btnClass');
})

let mainContentAtribute = mainContent.getAttribute('class')

if(mainContentAtribute != "null"){
    console.log("Não é nulo")
    console.log(mainContentAtribute)
}