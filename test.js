function display_returns_front(frontString, backString)
{
	var card = new Card(frontString, backString);
	return card.display() == frontString;
};
