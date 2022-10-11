// importando módulo express
const express = require('express');

// instanciando o express
const app = express();

// dizendo para o express que estaremos usando o ejs
// set() é uma função nativa do express
app.set("view engine", "ejs");
/* 
    Estamos dizendo para o express que a ferramenta que vamos usar para renderizar a view engine será o ejs 
*/

// criand uma rota
app.get("/", function(req, res){
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: "E",
            message: 'JS usa JavaScript para renderizar HTML.'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: "morzinho"
        },
        {
            title: "I",
            message: 'nstall EJS'
        },
        {
            title: 'S',
            message: "intaxe simples"
        }

    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
    // res.render() espera que o arquivo seja .ejs e esteja dentro de uma pasta chamada view
});

// criando outra rota
app.get("/sobre", function(req, res){
    res.render("pages/about");
});

app.listen(8081);
console.log("Server running");
 
