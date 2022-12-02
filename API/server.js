var express = require('express');
var app = express();
//const port = 4000

// répond par "hello world" lorsqu'une requête GET est faite à la page d'accueil
app.get('/', function(req, res)=> {
  console.log('hello world');
});

app.listen(4000);
console.log("attente des requetes au port");
//app.listen(port, () => { console.log(`Example app listening on port ${port}`) });