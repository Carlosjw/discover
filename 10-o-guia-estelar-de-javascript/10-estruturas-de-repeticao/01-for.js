// Estrutura de repetição: for
for(let i = 0; i <= 10; i++){
    // console.log(i);
};

// Decrementando
for(let j = 100; j > 0; j--){
    // console.log(j);
};

// interrompendo o loop
for(let k = 100; k > 0; k--){
    if(k === 50){
        break;
    }
    
    // console.log(k);
}

for(let l = 10; l > 0; l--){
    if(l === 5){
        continue; // salta o número 5
    }

    console.log(l);
}

// imprimindo pares
for(let m = 0; m <= 100; m++){
    if(m % 2 != 0){
        continue;
    }

    console.log(m);
}

// praticando
let pares = [];
let impares = [];

for(let n = 0; n <= 250; n++){
    if(n % 2 == 0){
        pares.push(n);
    } else {
        impares.push(n);
    }
}

console.log(`Pares: ${pares}.`)
console.log(`Ímpares: ${impares}.`)

// iterando em um array
let names = ['Saymon', 'Solange', 'Carlos'];

for(let i = 0; i < names.length; i++){
    console.log(`Índice => ${i}, propriedade => ${names[i]}.`);
}
