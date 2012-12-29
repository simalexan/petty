var http = require('http');
var mongoose = require('mongoose');
var Pet = require('./models/pet.js');
var log = console.log;

mongoose.connect('mongodb://localhost/test');

http.createServer(function (req, res){

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        log("Server home page on port 8000");
        var pet = new Pet({name: 'fluffy', health: 100, ownerId: 1});
        pet.loseHealth(15);
        res.end();

    }

}).listen(8000, 'localhost');