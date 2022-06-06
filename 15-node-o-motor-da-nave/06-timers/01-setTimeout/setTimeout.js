// setTimeout roda um função depois de x milissegundos

const timeOut = 3000;
const finished = () => console.log('done!')

setTimeout(finished, timeOut);

console.log('Mostrar'); // roda antes da callback

setTimeout(() => {
    console.log('Antes da callback');
}, 1500);