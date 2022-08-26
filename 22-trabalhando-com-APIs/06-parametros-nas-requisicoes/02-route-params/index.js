const express = require('express');

const app = express();

app.listen(3000);

app.use(express.json());

app.route('/').get((req, res) => res.send('Olá'))
app.route('/:name').get((req, res) => res.send(req.params.name));
app.route('/identidade/:name').get((req, res) => res.send(req.params.name));