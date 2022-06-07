// events é um módulo nativo do NodeJS
const {EventEmitter} = require('events');

// EventEmitter é uma função do tipo classe.

const event = new EventEmitter();
console.log(event);

/* 
    EventEmitter {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false
}
*/