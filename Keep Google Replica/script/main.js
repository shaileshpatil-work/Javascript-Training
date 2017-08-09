var initialNoteDiv = document.getElementsByClassName('initialNote');
var initialNotePreceder = document.getElementsByClassName('initialNotePreceder');

function noteKeeper() {
	initialNotePreceder[0].classList.add('hide');
}

function hideClassRemoval() {
	if((initialNoteDiv[0].innerHTML) === ("")) {
		initialNotePreceder[0].classList.remove('hide');
	} else if((initialNoteDiv[0].innerHTML) == ("<br>")) {
		initialNotePreceder[0].classList.remove('hide');
	}	else {
		initialNotePreceder[0].classList.add('hide');
	}
}