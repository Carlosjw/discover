let salarioDoAmigo = 1000;
let meuSalario = '2999.14'; // string
let meuSalarioCorrigido = Number(meuSalario); // convertendo para number

console.log(salarioDoAmigo + meuSalarioCorrigido);
console.log(
    typeof(salarioDoAmigo),
    meuSalario
);

console.log(
    typeof(meuSalario),
    salarioDoAmigo
)

// verificando se o valor é NaN (Not a Number)
console.log(isNaN(meuSalario))

// concatenando
let minhaString = 'Hello World!';
let minhaOutraString = "Hello World Two!";
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AE!`;

console.log(minhaStringComVariaveis);

