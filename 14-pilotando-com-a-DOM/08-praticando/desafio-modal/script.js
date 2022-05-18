const btn = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.modal-wrapper');
const body = document.querySelector('body');

btn.addEventListener('click', function(){
    modalWrapper.style.visibility = 'visible';
});

body.KeyboardEvent('keyup', function(){
    if(purpleDiv.value == 'Escape'){
        modalWrapper.style.visibility = 'hidden';
    }
})

