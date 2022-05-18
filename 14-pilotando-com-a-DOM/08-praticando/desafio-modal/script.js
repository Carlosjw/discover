const btn = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.modal-wrapper');
const body = document.querySelector('body');
const purpleDiv = document.querySelector('#purple-div');

btn.addEventListener('click', function(){
    modalWrapper.style.visibility = 'visible';
});

purpleDiv.addEventListener('click', function(){
  modalWrapper.style.visibility = 'hidden';
});

body.KeyboardEvent('keyup', function(){
    if(purpleDiv.value == 'Escape'){
        modalWrapper.style.visibility = 'hidden';
    }
})

