const {EventEmitter} = require('events');
const ev = new EventEmitter();

// emitindo o evento
ev.emit('Say Something');
