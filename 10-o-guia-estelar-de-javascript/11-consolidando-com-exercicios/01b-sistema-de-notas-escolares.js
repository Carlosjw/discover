// Solução Mayk Brito

function getScore(score){
    let scoreFinal;

    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    if(scoreA){
        scoreFinal = 'A';
        // console.log(`Nota: ${score}`);
    } else if(scoreB){
        scoreFinal = 'B';
        // console.log(`Nota: ${score}`);
    } else if(scoreC){
        scoreFinal = 'C';
        // console.log(`Nota: ${score}`);
    } else if(scoreD){
        scoreFinal = 'D';
        // console.log(`Nota: ${score}`);
    } else if(scoreF){
        scoreFinal = 'F';
    } else {
        scoreFinal = 'Nota inválida'
    }

    return scoreFinal;

}

console.log(getScore(-1));