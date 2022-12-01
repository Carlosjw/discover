let btn = document.createElement("button")
btn.setAttribute("id", "btn");
btn.innerText = "Botão";

let newBtn = document.createElement("button")
newBtn.setAttribute("id", "newBtn");
newBtn.innerText = "New Button";

document.body.style = "width: 800px; height: 700px; padding: 20px;"

document.body.appendChild(btn)
document.body.appendChild(newBtn)
newBtn.onclick = () =>{
    document.body.style = "display: flex; align-items-center; justify-content: center; gap: 10px; flex-wrap: wrap"
}

btn.onclick = function(){
    let newDiv = document.createElement("div")
    newDiv.classList.add("example");    
    document.body.appendChild(newDiv)
}

let styles = []


