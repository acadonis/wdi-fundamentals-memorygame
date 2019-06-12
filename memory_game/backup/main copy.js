
var cards = [
	{
		cardRank: "Queen",
		cardSuit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		cardName: "Queen",
		cardSuit: "Hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		cardName: "King",
		cardSuit: "Hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{	
		cardName: "King",
		cardSuit: "Diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];

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

	console.log("User flipped " + cards[cardId].cardName);
	cardsInPlay.push(cards[cardId].cardName);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

flipCard(2);
flipCard(3);






	

	
