const openModal = document.querySelector('button');
const modal = document.querySelector('dialog');
// Pegando o button de dentro do dialog
const closeModal = document.querySelector('dialog button')

// abrindo modal
openModal.onclick = function(){
    modal.showModal()
    /* 
        Podemos também usar o modal.showModal() e poderemos usar o Esc para fechar o mesmo.    
    */
   openModal.style.display = 'none';

}

// fechando modal
closeModal.onclick = function(){
    modal.close()
    openModal.style.display = 'flex';
}

