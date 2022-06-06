// clearTimeout cancela um timeOut

const timeOut = 3000;
const finished = () => console.log('done!')

// console.log(setTimeout(finished, timeOut));

// cancelando o timeOut
let timer = setTimeout(finished, timeOut);
clearTimeout(timer)
