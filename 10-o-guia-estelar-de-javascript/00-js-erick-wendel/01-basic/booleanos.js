const podeDirigir = true;

if(podeDirigir){
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if(!saldoEmConta){
    console.log('não tem saldo.')
}

const boolConString = "ae hackerzão!!"

// força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!boolConString); // true

// negação
console.log('negação', !boolConString); // false

// negação + forçar a bool
console.log(
    'negação + forçar a bool',
    !(!!boolConString) // false
)