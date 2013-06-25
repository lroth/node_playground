var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io');

app.get('/', function(req, res){
  res.send('hello world');
});

var sio = io.listen(server);

// listen for new web clients:
server.listen(3000);

sio.sockets.on('connection', function (socket) {
    console.log('A socket connected!');
});