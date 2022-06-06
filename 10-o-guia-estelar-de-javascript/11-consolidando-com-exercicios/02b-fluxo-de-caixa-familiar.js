// SOLUÇÃO MAYK BRITO

let family = {
    incomes: [1500, 1200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
}

function sum(array){
    let total = 0;
    
    for(let value of array){
        total += value;
    }

    return total;
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0;

    let balanceText = 'negativo';

    if(itsOk){
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText} : R$${total.toFixed(2)}.`);
}

calculateBalance()