// setInterval irá rodar uma função que N vezes
// depois de X milissegundos
const timeOut = 1000;
const checking = () => console.log('checking!');

setInterval(checking, timeOut)