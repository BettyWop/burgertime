var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded( { extended : true }));

var exphbr = require('express-handlebars')
app.engine('handlebars' , exphbr( { defaultLayout : 'main' }));
app.set("view engine", 'handlebars')

var router = require('./controllers/burgerControllers')
app.use(router);

app.listen(PORT, function() {
    console.log(`App is listening to PORT ${PORT}`)
})