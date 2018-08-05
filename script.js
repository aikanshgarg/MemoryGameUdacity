// an array of fa-icons 
const icons = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];


const cardsContainer = document.querySelector(".deck");

var moves = 0; // count moves/click events
let openedCards = []; // an empty array to store opened cards and compare if these are matched, will always have a length of 2
let matchedCards = []; // to check game over condition 

//---------------------- GAME LOGIC ----------------------------------------
game();

// creates the cards for html page from this loop
function game() {

	for (let i = icons.length - 1; i >= 0; i--) {
	
	// create an li assigned to const variable card
	const card = document.createElement("li");

	// add class="card" to our element, created with same name(const card)
	card.classList.add("card");

	// add an image from array icons, within the li tag
	card.innerHTML = "<i class='" + icons[i] + "'></i>";
	
	// append these cards to the deck class
	cardsContainer.appendChild(card);

	// add click event to each card
	click(card);
}

}
//-------------------------------------------------------------------------------

function click(card) {
    
    card.addEventListener('click', function() {
         
         // variables to store both cards
         const currentCard = this;
    	 const previousCard = openedCards[0]; 


    	// one card is opened
    	if (openedCards.length === 1) {

       		// open and show the card. Push(insert) the clicked card(this) to the array, for comparision
       		card.classList.add("open", "show", "disable");
            openedCards.push(this);

            // compare the cards function
            compare(currentCard, previousCard);          

         // no card is opened
    	} else {
    	         currentCard.classList.add("open", "show", "disable");
              // push the clicked-card(this) to the array for comparision
                 openedCards.push(this);

    	}

    });
}

function compare(currentCard, previousCard) {

	addMove(); // a pair click is counted as one move

	        // we need to compare our 2 opened cards here.
            // this.innerHTML is the last card(2nd one) we clicked, openedCards[0].innerHTML is the first one which was clicked and stored in array. {innerHTML are the icons of fa}
            if(currentCard.innerHTML === previousCard.innerHTML) {

            	matchedCards.push(currentCard, previousCard);
            	
            	// open both, as they match{by adding class "match"}
            	currentCard.classList.add("match");
            	previousCard.classList.add("match");
            	
            	// remove both the cards from array to make it an empty array again. Reset can be done using openedCards = []; as well!
            	openedCards.pop();
            	openedCards.pop();

            	// keep checking if game's over yet
            	isOver();
            	
            // the two cards don't match
            } else {

            	setTimeout(function() {
            		currentCard.classList.remove("open", "show", "disable");
            	    previousCard.classList.remove("open", "show", "disable");
            	}, 1000);

            	openedCards.pop();
            	openedCards.pop();
            }
}



function addMove() {
	moves++;
	var displayMoves = document.querySelector('.moves');
	displayMoves.innerHTML = moves;
	rating();
}


// rating function of player
var starsDisplay = $('.stars');
function rating() {
	switch(moves){
		case 15:
		starsDisplay

	}
}


// checking if game is over
function isOver() {

	if (matchedCards.length === icons.length) {

	}

} 

// RESTART BUTTON 
const restart_btn = $('.restart')

$(document).ready(function(){
    	restart_btn.click(function(){
    		window.location.reload();
    	});
    });