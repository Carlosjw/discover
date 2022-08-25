const express = require('express');

const server = express();

server.use(express.json());

// localhost:3000/ola%20alunos => ola alunos

server.route('/').get((req, res) => res.send(req.query.name)); // localhost:3000?name=Carlos

server.route('/').put((req, res) => res.send(req.body.author));

server.route('/:parametro').get((req, res) => res.send(req.params.parametro));

server.listen(3000);