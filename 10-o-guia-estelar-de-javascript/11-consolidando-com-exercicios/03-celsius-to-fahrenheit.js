/* 
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para
    outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

function degreeConvert(degree, degreeType){
  let degreeChanged;
  
  degreeType = degreeType.toUpperCase();
  
  if(degreeType == "C"){
    degreeChanged = degree * 9/5 + 32;
    degreeType = "F";
  } else if(degreeType == "F"){
    degreeChanged = (degree - 32) * 5/9
    degreeType = "C";
  } else {
    console.log("Tipo inválido")
  }
  
  console.log(`${degreeChanged.toFixed(1)}°${degreeType}.`);
}

degreeConvert(50, "f");