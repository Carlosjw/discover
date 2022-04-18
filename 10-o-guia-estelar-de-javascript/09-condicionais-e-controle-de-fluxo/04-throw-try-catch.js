// throw => disparar, lançar
function sayMyName(name = ''){
    if(name === '') {
        throw 'O nome é necessário!';
    }

    console.log(name);
}

/* let name = ''
sayMyName(name); */

// try... catch => tentar e pegar
try{
    sayMyName('Carlos')
} catch(e) {
    console.log(e);
}

console.log('Após o try/catch.')