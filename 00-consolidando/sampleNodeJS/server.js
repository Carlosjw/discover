const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// definindo caminho do css & images
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('pages/index');
});

app.get("/register", function(req, res){
    res.render('pages/register');
});

app.get('/reports', function(req, res){
    res.render('pages/reports');
});

app.get('/login', function(req, res){
    res.render('pages/login');
});

app.listen(8080);
console.log('Server is running...');