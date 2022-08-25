const express = require('express');

const app = express()

app.listen('3000'); // listem fica ouvindo o navegador a partir da porta que definimos

// rota GET
// app.route('/').get((req, res) => res.send('Hello'));

// rota sobre
// app.route('/sobre').get((req, res) => res.send('Hello sobre'))

/* 
    / => define a rota padrão base/inicial ou link inicial do site
    get((req, res)) => sempre usados quando formos trabalhar com rotas, significa 'requisição' e 'response'
*/

// middleware => fazer a ponte quando for usar o JSON do Insomnia
app.use(express.json());

// rota POST
app.route('/').post((req, res) => res.send (req.body)); // envia o corpo da requisição

// rota PUT: editar
let author = 'Carlos';
app.route('/').get((req, res) => res.send(author));

app.route('/').put((req, res) =>{
    author = req.body.author; // recebe apenas o valor da propriedade author do JSON
    res.send(author)
});

app.route('/').get((req, res) => res.send(author))

// rota DELETE
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})

// colocar no Insomnia "localhost:3000/0101"
/* 
    Normalmente o DELETE recebe o identidicador na ROTA
    Os dois pontos (:) indicam que o identificado é uma variável que possui conteúdo. Quando passamos uma variável pela rota, chamamos isso de 'params'
*/