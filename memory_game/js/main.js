
var cards = [
	{
		cardRank: "Queen",
		cardSuit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		cardRank: "Queen",
		cardSuit: "Hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		cardRank: "King",
		cardSuit: "Hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{	
		cardRank: "King",
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

	console.log("User flipped " + cards[cardId].cardRank);
	console.log(cards[cardId].cardSuit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].cardRank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

flipCard(2);
flipCard(3);






	

	
