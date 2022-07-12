# Funções puras

    * Não deverá `depender de nenhum dado externo` a não ser o que foi passado com argumento
    * Não deverá sofrer `nenhuma interferência` do mundo externo a ela
    * Se o argumento é o mesmo, `o retorno não poderá ser diferente` quando a função for chamada novamente
    * Não terá `nenhum efeito colateral` no seu código
      * Não irá modificar nenhum dado
      * Não irá guardar nenhum estado

```js

    // Função impura
    
    // Exemplo 1: está dependendo de dado externo
    // que não foi passado como parâmetro
    function calculateCircunference(radius){
        return Math.PI * (radius +  radius);
    };

    // Exemplo 2: está alterando um dado externo
    let person = {
        name: 'Rafael Camarda',
        age: 'jovem'
    };

    function changeName(name){
        person.name = name;
    };

    // Função pura

    // Exemplo 1:
    const calculateCercumference = function(pi, radius){
        return pi * (radius + radius);
    };

    // com arrow function
    const calculateCircumference = (pi, radius) =>
        pi * (radius + radius);

    // Exemplo 2
    const changeName = (person, name) => ({...person, name})
     
```