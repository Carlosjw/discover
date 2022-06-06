// Enventos via JS

const h1 = document.querySelector('h1');

h1.addEventListener('click', function(){
    console.log('print')
})

h1.addEventListener('mouseover', function(){
    console.log('outro print')
})