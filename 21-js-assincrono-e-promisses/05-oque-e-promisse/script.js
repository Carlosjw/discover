/* 
    Promise

    A promessa de que algo irá acontecer
    Poderá dar certo ou errado, mas irá acontecer.
*/
let aceitar = true;

console.log('Pedir Uber');

const promessa = new Promise((resolve, reject) =>{

    if(aceitar){
        return resolve('Pedido aceito')
    }
    return reject('Pedido negado')
});

console.log('Aguardando...')

promessa.then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Finalizada!'));

/* 
    Entendendo o código:

    * then => captura o resolve
    * catch => captura o reject
    * finally => executado independentemente do resultado ser resolve ou reject
*/