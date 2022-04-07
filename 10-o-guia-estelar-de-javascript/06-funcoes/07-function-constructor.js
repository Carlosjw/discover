/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    
*/

function Person(name) {
    this.name = name;
    this.walk = function (){
        return this.name + ' está andando'
    }
}

const carlos = new Person('Carlos')
console.log(carlos.walk());

const joao = new Person('João')
console.log(joao.walk());