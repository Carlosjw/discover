// for... in: lopp em objetos

let person = {
    name: 'Pietro',
    age: 35,
    weight: 88.6
}

// acessando as propriedades do objeto
for(let property in person){
    console.log(property); // nome da propriedade
    console.log(`Nome da propriedade => ${property}, valor da propriedade => ${person[property]}`); // valor da propriedade
}