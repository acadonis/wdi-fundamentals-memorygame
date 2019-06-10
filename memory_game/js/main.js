
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch(){

if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	}
	else if (cardsInPlay[0] !== cardsInPlay [1]){
		alert("No match, better luck next time!");
	}

}

function flipCard(cardId){

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

flipCard(0);
flipCard(2);


/*var cardOne = cards [0];

var cardTwo = cards [1];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);



*/




	

	
