const { inherits } = require ('util'); // util é modulo de dentro do NodeJS
// inherits vai herdar as funcionalidades de outra coisa
const { EventEmitter } = require('events');

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter);

// criando herdeiro das funcionalidades
const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`));

console.log('Oh! E agora, quem poderá me defender?');
chapolin.emit('help');