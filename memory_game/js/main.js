
var cards = [
	{
		cardName: "Queen",
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

function createBoard(){
	for (i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var cardsInPlay = [];

function checkForMatch(){

if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You've found a match!");
	}
	else if (cardsInPlay[0] !== cardsInPlay [1]){
		alert("No match, better luck next time!");
	}

}

function flipCard(){
	var cardId = this.getAttribute("data-id");

	if (cardsInPlay.length < 2) {
	cardsInPlay.push(cards[cardId].cardName);
	this.setAttribute("src", cards[cardId].cardImage);
	}
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}	
}

createBoard();




	

	
