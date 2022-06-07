const {EventEmitter} = require('events');
const ev = new EventEmitter();

// ouvindo os eventos uma única vez
ev.once('Say Something', (message) => {
    console.log('Eu ouvi voce', message);
})

ev.emit('Say Something', 'Carlos'); // somente este será ouvido
ev.emit('Say Something', 'Solange'); // este será ignorado
ev.emit('Say Something', 'Saymon'); // este também será ignorado

