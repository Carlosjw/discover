/* 
    Sistema de gastos familiar

    Crie um objeto de possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo.

*/

// MINHA SOLUÇÃO

let caixaFamilia = {
    receitas: [
        2296, 100, 100
    ],
    despesas: [
        134.99, 71.5, 150.00, 600, 499, 301.21, 3000
    ]
}

function showBalance(receitas, despesas){
    let totalReceitas = 0;
    for(let receita of receitas){
        totalReceitas += receita;
    }
    console.log(`Total Receitas: R$${totalReceitas.toFixed(2)}.`);

    let totalDespesas = 0;
    for(let despesa of despesas){
        totalDespesas += despesa;
    }
    console.log(`Total Receitas: R$${totalDespesas.toFixed(2)}.`);

    let saldo = totalReceitas - totalDespesas
    // console.log(`Saldo: R$${saldo.toFixed(2)}`);

    if(saldo <= 0){
        console.log(`Saldo negativo: R$${saldo.toFixed(2)}.`)
    } else {
        console.log(`Saldo positivo: R$${saldo.toFixed(2)}.`)
    }
}

let receitas = caixaFamilia.receitas;
let despesas = caixaFamilia.despesas;

showBalance(receitas, despesas);



