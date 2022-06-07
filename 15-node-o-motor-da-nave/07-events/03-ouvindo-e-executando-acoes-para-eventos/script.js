const {EventEmitter} = require('events');
const ev = new EventEmitter();

// ouvindo os eventos
ev.on('Say Something', (message) => {
    console.log('Eu ouvi voce', message);
})

ev.emit('Say Something', 'Carlos');
ev.emit('Say Something', 'Solange');
ev.emit('Say Something', 'Saymon');

