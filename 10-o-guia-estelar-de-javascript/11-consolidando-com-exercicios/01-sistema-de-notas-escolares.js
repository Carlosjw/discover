/* 
    => Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico
    para o sistema de notas em caracteres tipo A B C

    * de 90 para cima   -   A
    * entre 80 - 89     -   B
    * entre 70 - 79     -   C
    * entre 60 - 69     -   D
    * menor que 60      -   F
     
*/

function convertNota(nota){

    if(nota >= 90){
        nota = 'A';
    }else if(nota >= 80 && nota <= 89){
        nota = 'B'
    }else if(nota >= 70 && nota <= 79){
        nota = 'C'
    }else if(nota >= 60 && nota <= 69){
        nota = 'D'
    }else {
        nota = 'F'
    }
    
    console.log(`Nota => "${nota}"`);
}

convertNota(50);

