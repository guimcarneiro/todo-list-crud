const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./app/routes.js')(app);

// TODO Fazer outro arquivo de routes, só que /store, fazendo um select no BD

app.listen(port);
console.log('subiu');