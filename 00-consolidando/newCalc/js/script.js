let calNumbers = document.querySelectorAll(".calcNumber")
let displayCalc = document.querySelector(".display")
calNumbers.forEach((number, index) => {
    number.textContent = Number(index);
    number.addEventListener("click", function(){
        displayCalc.textContent += Number(index);
        console.log(displayCalc.textContent + " => " + typeof displayCalc.textContent)
    })
    number.addEventListener("keydown", function(e){
        console.log(e)
    })
})

console.log(calNumbers)
console.log(displayCalc.textContent + typeof displayCalc.textContent)