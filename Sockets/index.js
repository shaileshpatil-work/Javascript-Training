//  THIS FILE IS FOR SERVER

var express = require('express');
var socket = require('socket.io');

// App Setup
var app = express();
var server = app.listen(3000, function(){
	console.log('Listening to port 3000');
});

// Static File
app.use(express.static('public'));

// Socket Setup
var io = socket(server);

io.on('connection', function(socket) {
	console.log('Made Socket Connection', socket.id);

	socket.on('chat', function(data) {
		io.sockets.emit('chat', data);
	});

	socket.on('typing', function(data) {
		socket.broadcast.emit('typing', data);
	});
});

