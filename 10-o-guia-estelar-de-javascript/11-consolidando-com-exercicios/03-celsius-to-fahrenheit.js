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
  if(degreeType == "F"){
    degreeChanged = degree * 9/5 + 32;
  } else if(degreeType == "C"){
    degreeChanged = (degree - 32) * 5/9
  } else {
    console.log("Tipo inválido")
  }
  
  return degreeChanged;
}

degreeConvert(76, "F");