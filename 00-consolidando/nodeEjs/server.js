const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// definindo caminho do css
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('pages/index');
});

app.get("/sobre", function(req, res){
    res.render("pages/info");
})

app.get("/contactUs", function(req, res){
    res.render("pages/contactUs")
})

app.listen(8080);
console.log('The server is running...');