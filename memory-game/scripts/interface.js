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

function createCard (content) {		// Create The card

	let card = document.createElement("div")
	let image = document.createElement("img")
	let front_part = document.createElement("div")
	let back_part = document.createElement("div")

	image.setAttribute("src", `images/${content}.png`)

	back_part.appendChild(document.createTextNode("&lt;/&gt;"))
	front_part.appendChild(image)

	card.appendChild(front_part)
	card.appendChild(back_part)

	back_part.classList.toggle("back-part")
	front_part.classList.toggle("front-part")

	card.classList.toggle("card")
	card.classList.toggle(content)

	return card

}