// function expression
// function anonymous
const sum = function (number1, number2){
    let total = number1 + number2; // parameters - parâmetros
    // retornando o resultado
    return total;
};

// arguments - argumentos
sum(2, 3);

sum(8, 9);

let number1 = 36
let number2 = 48

console.log(`O número 1 é ${number1}.`);
console.log(`O número 2 é ${number2}.`);

console.log(`A soma é ${sum(number1, number2)}.`)

// Função é um liquidificador
function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2
}

// copo
const copo = fazerSuco('banana', 'maçã');
console.log(copo);
