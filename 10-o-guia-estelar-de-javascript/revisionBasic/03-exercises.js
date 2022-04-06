// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight); // undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * weight: Number (float)
        * isSubscribed: Boolean
*/

const person = {
    name: 'Carlos',
    age: 34,
    weight: 3.5,
    isSubscribed: true,
}

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1. Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2. Mostre no console a senguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name< <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
    name: 'Carlos',
    age: 34,
    weight: 73.5,
    isSubscribed: true,
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)

console.log(typeof student); // object

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
    6. Atribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do Array students.
*/

const pedro = {
    name: 'Pedro',
    age: 19,
    weight: 70.1,
    isSubscribed: true
}

students[1] = pedro

console.log(students);

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por quê? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

console.log(a); // undefined
var a = 1

