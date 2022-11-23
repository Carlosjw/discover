let elements = document.querySelectorAll(".card")

console.log(elements)

let ourFamilyNames = ["Carlos Antonio de Moura Lima", "Solange de Souza Figueredo Lima", "Saymon Luiz Figueredo Lima"]

elements.forEach(element => {

    ourFamilyNames.forEach((name, index) => {
            element.addEventListener("mouseover", function(){
            element.style = "outline: 2px solid gray;"
       
            console.log(element.textContent)
        })
    
        element.addEventListener("mouseout", function(){
            element.style = "outline: none;"
            element.textContent = ""
            console.log( `Vazio: ${element.textContent}`)

        })
    })

})