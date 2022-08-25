const express = require('express');

const server = express();

server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.static(__dirname + '/public'));


server.get('/', (req, res) => {
    res.render('pages/index')
})

server.listen(3000)