function display_returns_front(frontString, backString)
{
	return (new Card(frontString, backString)).display() == frontString;
}

function flip_returns_back(frontString, backString)
{
	return (new Card(frontString, backString)).flip() == backString;
}

function get_first_card()
{
	var card = (new List()).get(0);
	return card.front == "Hello. (formal) " && card.back == "Salve. (sAH-lveh)";
}

function displayIn_fills_in_element_innerHTML(frontString, backString, element)
{
	var card = new Card(frontString, backString);
	card.displayIn(element);
	return element.innerHTML == card.front;	
}

function flipIn_fills_in_element_innerHTML(frontString, backString, element)
{
	var card = new Card(frontString, backString);
	card.flipIn(element);
	return element.innerHTML == card.back;	
}
