const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// definindo caminho do css & images
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('pages/index');
})

app.listen(8080);
console.log('Server is running...')