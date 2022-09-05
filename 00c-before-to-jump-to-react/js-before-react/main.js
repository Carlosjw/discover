// Arrays: métodos
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// iterando com o for
for(const i of array){
    document.body.innerText += i;
}

// iterando com forEach: não permite um retorno de dentro do método
array.forEach(item => {
    document.body.innerText += item;
})

// iterando com o map: possibilita o uso do return e sempre vai retornar uma array com o tamanho do array original. Só usamos o map quando queremos retornar um novo array com algum mudança no valor do itens do original, mas não na quantidade de itens.
const newArray = array.map(item => {
    if(item % 2 === 0){
        return item * 10
    }

    return item;
})

// filter: filtra um array: só filtra, corta, mas não altera os valores
const novoArray = array.filter(item => item % 2 !== 0)

// every: retorna true se todos os items passarem na condição que passarmos como parâmetro, e false se pelo menos um deles não passar
const allItemsTypeIsNumber = array.every(item => {
    return typeof item === 'number';
});

// some: verifica se pelo menos um item satisfaz a condição passada nos seus parâmetros
const atLeastOneItemIsNoteANumber = array.some(item => {
    return typeof item !== 'number';
});

// find: procura apenas um item no array
const par = array.findIndex(item => item % 2 === 0)

// reduce: cria uma nova estrutura a partir do array
const soma = array.reduce((acc, item) => {
    document.body.innerText += acc + ',' + item + ' | ';

    return acc + item;
}, 0);

// document.body.innerText = JSON.stringify(par)