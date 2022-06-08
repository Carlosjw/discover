// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000;
const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut);

// cancelando com uma função
setTimeout(() => clearInterval(interval), 3000);