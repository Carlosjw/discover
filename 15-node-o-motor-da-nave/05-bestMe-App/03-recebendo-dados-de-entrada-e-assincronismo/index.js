/* 
    Assincronismo
*/

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n")
}

ask()

// on() é alguma coisa que fica ouvindo eventos. O "data" é isso que fica ouvindo e rodando uma função
process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + "\n");
    // trim() remove os espaços em branco
})