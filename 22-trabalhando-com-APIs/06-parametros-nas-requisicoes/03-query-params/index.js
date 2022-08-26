const express = require('express');

const app = express();

app.use(express.json());
app.listen(3000);

// construindo rota para trabalhar com query params
app.route('/').get((req, res) => res.send(req.query.name));
app.route('/about/user').get((req, res) => res.send(req.query));