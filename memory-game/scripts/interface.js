window.onload = () => {

	startGame()

}

function startGame () {

	drawScreen()
	addEvent()
	
}

function addEvent () {					// Start the game by putting the click event

	let board = document.getElementById("board").children
	let countMoves = document.getElementById("count-moves")
	let elementToCheck = []

	for (let card of board) {

		card.addEventListener("click", () => {				// Add the click event in all the cards

			if (elementToCheck.length != 2) {			// Check if there is 2 cards fliped to stop to fliped more.

				flipCard(card)
				elementToCheck.push(card)

				if (elementToCheck.length == 2) {		// Check if there is 2 cards fliped to check if both are equal

					countMoves.innerHTML = parseInt(countMoves.innerHTML) + 1

					if (checkBoth(elementToCheck) == false) {	// Check if both elements are equal


						setTimeout(() => {			// The timer to wait the card flip, so that the function can turn both cards back

							for (let element of elementToCheck) {

								element.classList.remove("flip")	// Fliping the not equal elements back.

								if (elementToCheck[1] == element) {

									elementToCheck = []
								}
							}

						}, 1000)
						
					}

					else {
						elementToCheck = []

						countMoves.innerHTML = parseInt(countMoves.innerHTML) + 1
						
					}
				}
			}

			GameOver() // Show the game over screen if the game is over
		})
	}

}

function returnCards () {				// Return true if there is 2 fliped cards

	let board = document.getElementById("board").children
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

function flipCard (card) {				// Flip the card

	card.classList.toggle("flip", true)

}

function createCard (content) {				// Create The card

	let card = document.createElement("div")
	let image = document.createElement("img")
	let front_part = document.createElement("div")
	let back_part = document.createElement("div")

	image.setAttribute("src", `images/${content.slice(0, content.length - 1)}.png`)

	back_part.innerHTML = "&lt;/&gt;"
	front_part.appendChild(image)

	card.appendChild(front_part)
	card.appendChild(back_part)

	back_part.classList.toggle("back-part")
	front_part.classList.toggle("front-part")

	card.classList.toggle("card")
	card.classList.toggle(content)

	return card

}

function drawScreen () {				// Draw the cards in the screen

	let images = shuffleCards(generatePair())
	let board = document.getElementById("board")
	let allElements = []

	for (let element of images) {
		
		allElements.push(createCard (element))
	}

		

	for (let element of allElements) {

			board.appendChild(element)
	}

}

function GameOver () {							// Show the game over screen

	let board = document.getElementById("board").children
	let element = document.getElementById("GameOver")
	let gameOver = false

	for (let element of board) {

		if (element.classList.contains("flip")) {
			gameOver = true
		}
		else {
			gameOver = false
			break
		}
	}


	if (gameOver == true) {

		element.style.display = "flex"

	}
}

function ResetGame () {				// Reset The board

	let board = document.getElementById("board")
	let element = document.getElementById("GameOver")

	document.getElementById("count-moves").innerHTML = 0

	board.innerHTML = ""
	element.style.display = "none"

	startGame()
}

function checkBoth (arrayElement) {		// receive a array as paramether width a length of 2, and check if both values are equal and return true or return false

	let element1 = arrayElement[0].classList.item(1)
	let element2 = arrayElement[1].classList.item(1)

	if (element1.slice(0, element1.length - 1) == element2.slice(0, element2.length - 1)) {

		return true

	}
	else {

		return false

	}
}