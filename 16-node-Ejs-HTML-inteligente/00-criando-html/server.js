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
    res.render("pages/index");
    // res.render() espera que o arquivo seja .ejs e esteja dentro de uma pasta chamada view
});

// criando outra rota
app.get("/sobre", function(req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log("Server running");
 
