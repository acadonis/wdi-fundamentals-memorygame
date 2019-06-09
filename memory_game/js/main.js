
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards [0];

var cardTwo = cards [1];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	}
	else if (cardsInPlay[0] !== cardsInPlay [1]) {
		alert("No match, better luck next time!");
	}
}

	

	
