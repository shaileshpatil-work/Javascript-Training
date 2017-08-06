var pageCounter = 1;
var ourButton = document.getElementById('dataRetriever');

ourButton.addEventListener('click', function() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

	ourRequest.onload = function() {
		var responseData = JSON.parse(ourRequest.responseText);
		renderToDOM(responseData);
	};

	ourRequest.send();
	pageCounter++;

	if (pageCounter == 4) {
		ourButton.classList.add('hide');
	}
});

function renderToDOM(data) {
	var animalContainer = document.getElementById('animalInfo');
	for (var i = 0; i < data.length; i++) {
		var paraElement = document.createElement('p');
		paraElement.textContent = data[i].name + " is a " + data[i].species + " that loves " + data[i].foods.likes + "."; 
		animalContainer.appendChild(paraElement);
	}
};
