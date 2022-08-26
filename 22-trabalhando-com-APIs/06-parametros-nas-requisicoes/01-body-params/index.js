const express = require('express');

const server = express();

server.use(express.json());

server.listen(3000);

server.route('/').post((req, res) => {
    const { nome, idade,  qualidades } = req.body;
    res.send(`Minha amada é a ${nome}, tem ${idade} anos e possui as qualidades: ${qualidades}`);
});