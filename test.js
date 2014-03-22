function display_returns_front(frontString, backString)
{
	var card = new Card(frontString, backString);
	return card.display() == frontString;
}

function flip_returns_back(frontString, backString)
{
	var card = new Card(frontString, backString);
	return card.flip() == backString;
}
