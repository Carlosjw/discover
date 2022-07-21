// Funçoes aceitam qualquer tipo de dado como argumento
function imprimirDados(dado){
    console.log(dado())
}

imprimirDados(function(){
    return 'Olá mundo'
})

/* 
    callback => função passada como argumento para outra função que será chamada de volta (callback)
*/