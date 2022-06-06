/* 
    * stdout.write() => vai escrever alguma coisa de saída;
*/

// process.stdout.write("Alguma coisa \n\n\n");

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