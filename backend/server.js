var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

require('./app/routes.js')(app);
//Fazer outro arquivo de routes, só que /store, fazendo um select no BD

app.listen(port);
console.log('subiu');