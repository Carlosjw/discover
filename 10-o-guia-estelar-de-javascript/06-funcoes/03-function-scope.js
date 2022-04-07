// function scope

let subject = 'create video';

function createThink(subject) { 
    subject = 'study';
    return subject    
};

console.log(subject); // global
console.log(createThink(subject)); // função

// sem o argumento, ele pegaria o global
let other;

function otherValue(){
    other = 'other thing'; // atualiza o valor da variável global
    return other;
}

console.log(`Variável 'other' sem valor atribuído: ${other}.`); // undefined
console.log(otherValue()); // chama o retorno da global atualizada
console.log(`Variável 'other' com valor atribuído pela função: ${other}.`); // exibe a variável global com o valor atualizado pela função