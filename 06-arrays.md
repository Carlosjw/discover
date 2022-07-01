# Manipulando `arrays`

```js
    const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

    // a indexação começa pelo número 0
    console.log(pilotos[0]) //Senna

    // acessar o tamanho do array
    console.log(pilotos.length) //4

    // iterável
    for(let piloto of pilotos){
        console.log(piloto)
    }

    // adicionar piloto
    pilotos.push('Alonso');

    //encontrar um elemento
    const senna = pilotos.find(piloto => piloto === 'Senna');
    console.log(senna)


    // deletar um elemento
    pilotos.splice(1, 1);

```