/* 
    IMPORTANTE!

    ==> PESQUISAR SOBRE data-keys
    ==> dataset
*/
// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event){
    // console.log(event.target.dataset.key)

    let audioKeyCode = getKeyCode(event)

    // console.log(event.type); // tipo de evento
    // console.log(audioKeyCode);

    // if key exists

    // play audio

}

function getKeyCode(event){
    // keyCode
    let keyCode;

    const isKeyBoard = event.type === "keydown";
    // typed or pressed key
    if(isKeyBoard){
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }
}

// click with mouse
keys.forEach(key =>{
    // console.log(key.dataset.note) // exibindo a nota da tecla
    key.addEventListener("click", playNote)
})

// keyboard types
// adicionando evento de pressionamento de tecla
// elemento window representa a janela de visualizaçõo
window.addEventListener("keydown", playNote)
