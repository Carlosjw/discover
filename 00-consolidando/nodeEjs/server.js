const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('pages/index');
});

app.get("/sobre", function(req, res){
    res.render("about");
})

app.listen(8080);
console.log('The server is running...');