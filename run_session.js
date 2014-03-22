var session = new Session(new List());

function next()
{
	session.nextCard().displayIn(document.getElementById('front'));
	document.getElementById('back').innerHTML = "";
}

function flip()
{
	session.currentCard().flipIn(document.getElementById('back'));
}
