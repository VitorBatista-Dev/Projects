let board = document.getElementById("board").children		// Select the board element


function startGame () {			// Start the game by putting the click event

	for (let card of board) {
		card.addEventListener("click", () => {
			flipCard(card)
		})
	}

}

function returnCards () {		// Return true if there is 2 fliped cards
	let count = 0

	for (let card of board) {

		if (card.classList.contains("flip")) {
			count++

		}

	}

	if (count == 2) {
		return true
	}
	else {
		return false
	}
}

function flipCard (card) {		// Flip the card

	if (!returnCards()) {

		card.classList.toggle("flip", true)

	}

}

function createCard () {
	let ImagePart = document.createElement
}