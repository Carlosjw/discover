/* 
    'Process' é um processo que fala sobre o que está sendo rodado no momento no Node.
*/

console.log(process.argv); // 'process'

/* 
    'process.argv' retorna uma array com uma série de informações sobre o que está sendo executado no momento, ex: node, nome do arquivo atual, etc...
*/

console.log('Seu nome é ', process.argv[2] + ' ' + process.argv[3]); // Seu nome é Mayk Brito

// ORGANIZANDO
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é ${firstName} ${lastName}.`)

/* 
    Necessário escrever no terminal Node 'node process Mayk Brito' para que o valor acima seja retornado, de outra forma, será retornado 'Seu nome é undefined undefined'.
*/
