var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"))
});

app.get("/assets/css/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "assets/css/styles.css"));
});

app.get('/assets/js/index.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'assets/js/index.js'))
});

app.get('/db.json', function(req, res){
    res.sendFile(path.join(__dirname, 'db.json'))
});

app.get('/api/notes', function(req, res){
    res.sendFile(path.join(__dirname, 'db.json'))
})

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})