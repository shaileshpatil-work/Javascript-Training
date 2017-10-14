//  THIS FILE IS FOR CLIENT

var socket = io.connect('http://localhost:3000');

var outputElement = document.getElementById('output'),
		feedbackElement = document.getElementById('feedback'),
		handleElement = document.getElementById('handle'),
		messageElement = document.getElementById('message'),
		sendElement = document.getElementById('send');

// Emit Events
sendElement.addEventListener('click', function() {
	socket.emit('chat', {
		handle: handleElement.value,
		message: messageElement.value
	});
	messageElement.value = '';
});

messageElement.addEventListener('input', function() {
	socket.emit('typing', handle.value);
});

socket.on('chat', function(data) {
	feedbackElement.innerHTML += '';
	outputElement.innerHTML += '<p><span class="userName">'+ data.handle +': </span>'+ data.message +'</p>';
});

socket.on('typing', function(data) {
	feedbackElement.innerHTML = '<p><em>'+ data +' is typing a message...</em></p>';
});
