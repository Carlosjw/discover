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
    process.stdout.write("\n\n" + questions[index] + " => ")
}

ask()

const answers = [];
// mantém o programa rodando sem parar
process.stdin.on("data", data => {
   answers.push(data.toString().trim());

   if(answers.length < questions.length){
       ask(answers.length);
   }else{
       console.log(answers);
        process.exit();
   };
   
});

// função que fica ouvindo o exit()
process.on('exit', () => {
    console.log(`
        Bacana, Carlos!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]};

        O que te deixou feliz hoje:
        ${answers[2]};

        Você ajudou ${answers[3]} pessoas hoje!!

        Volta amanhã para novas reflexiões
    `)
});