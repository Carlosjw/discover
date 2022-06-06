let tarefas = [
    'escovar os dentes',
    'tomar banho',
    'fazer o café',
    'tomar café',
    'vir pro trabalho'
]

// console.log(tarefas[0]);
// console.log(tarefas[1]);
// console.log(tarefas[2]);
// console.log(tarefas[3]);
// console.log(tarefas[4]);

// // exibindo quantidade de itens no array
// console.log(tarefas.length);

// // adicionando item no final do array
// tarefas.push('fazer meu trabalho com afinco');
// console.log(tarefas)

// // remover último elemento do array
// let ultimo = tarefas.pop()
// /*
//     pop exclui o valor, mas guarda ele para uso posterior
// */
// console.log(ultimo, tarefas)

// // reovendo primeiro item da lista
// const primeiro = tarefas.shift();
// console.log(primeiro, tarefas)


// removendo um item específico a partir de um índice
console.log(tarefas[2]); //'fazer o café'

tarefas.splice(2, 1); // índice inicial + quantidade (no exemplo, somente o elemento do índice 2)

console.log(tarefas)

const merge = [
    1, 'José', 3.5
]

// verificar o tipo do array
console.log(typeof(merge)); // object

// verificar se é um Array da forma correta
console.log(Array.isArray(merge));

// ordenando elentos do array
const numeros = [3, 2, 1, 0, 4]
console.log(numeros.sort());

const letras = ['e', 'a', 'd', 'h', 'k', 'z', 'u', 'j']
console.log(letras.sort())

// juntando arrays
const merged = numeros.concat(letras)
console.log(merged)

// juntar arrays em uma string
console.log(merged.join(' - '));

// verificar índice de um item em um array
const index = merged.indexOf('k');
console.log(merged[index]);