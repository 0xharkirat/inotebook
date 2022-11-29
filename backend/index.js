const connectToMongo = require('./db');



connectToMongo();

//jshint esversion:6
const express = require('express');
const app = express();
const port = 3000;
app.get('/', function(req, res){
res.send('Hello Harry')
});

app.listen(port, function(){
console.log(`Example app listening at http://localhost:${port}`);
});