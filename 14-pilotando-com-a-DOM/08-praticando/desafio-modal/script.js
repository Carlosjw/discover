const btn = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.modal-wrapper');
const purpleDiv = document.querySelector('#purple-div');

btn.addEventListener('click', function(){
    modalWrapper.style.visibility = 'visible';
});

// dica hora de codar
document.onkeydown = function(event){
    // Mayk Brito
    const isEscKey = event.key === 'Escape';

    if(isEscKey){
        modalWrapper.style.visibility = 'hidden';
        console.log(event.key);
    }
}



