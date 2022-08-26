const express = require('express');

const server = express();

server.set('view engine', 'ejs'); // relacionando o ejs ao express
server.use(express.json()); // relacionando o JSON ao express
server.use(express.static(__dirname + '/public')); // habilitando o acesso ao CSS


server.get('/', (req, res) => {
    res.render('pages/index')
})

server.listen(3000)