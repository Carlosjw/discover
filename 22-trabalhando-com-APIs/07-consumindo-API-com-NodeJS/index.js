const express = require('express');

// importando o axios para o nosso projeto
const axios = require('axios')

const app = express();

app.use(express.json());
app.listen(3000);

app.route('/').get((req, res) => {

    axios.get('https://api.github.com/users/Carlosjw')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))

})