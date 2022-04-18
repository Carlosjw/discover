function chackPair(value){
    if(isNaN(value)){
        // throw new Error(`Value precisa ser um número: value é => ${typeof value}.`)
        throw `Value precisa ser um número: value é => ${typeof value}.`
    } else if(value % 2 != 0) {
        console.log(`Value precisa ser um número par: value é => ${value}.`)
    }
    else {
        console.log(`Value é um número par: ${value}.`);
    }    
}

try{
    chackPair('a');
} catch (e) {
    console.log(e);
}