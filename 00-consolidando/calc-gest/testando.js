let descriptions = document.querySelectorAll(".descricao");
let titles = document.querySelectorAll(".titulo");
let btn = document.querySelector("#btn"); // pegando botão
let userData = document.querySelector("#qtd"); // Pegando valor do input
let dayData = document.querySelector("#dayData"); // pegando campo dia alvo
let finalResults = document.querySelectorAll(".result");

let weekBase = 7;

btn.addEventListener('click', function(){

    let mainData = Number(userData.value);

    let references = []

    descriptions.forEach(item => {
        if(item.outerText.includes(' mUI/mL')){
            item = Number(item.outerText.replace(" mUI/mL", ""))
        }
        references.push(item)
    })

    references.forEach((reference, index) =>{
        
    })

    // Personalizando resultados com CSS
    titles.forEach(title => {
        console.log(title.nextElementSibling.outerText);
    })

    console.log(dayData.textContent = typeof references);
    console.log(references)
})

// console.log(descriptions)

descriptions.forEach(description => {
    let newElement = (description.previousElementSibling.outerText)
    // console.log(newElement)
})

finalResults.forEach(finalResult => {
    console.log(finalResult)
})

