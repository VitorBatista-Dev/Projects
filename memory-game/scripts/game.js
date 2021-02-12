let cardImages = [
	
	"bootstrap",
	"css",
	"electron",
	"firebase",
	"html",
	"javascript",
	"jquery",
	"mongo",
	"node",
	"react"

]

function generatePair () {		// This function will create a new array with pairs of each string of the images

	let arrayPair = []

	for (let a in cardImages) {

		for (let c = 0;c < 2;c++) {
			arrayPair.push(cardImages[a] + c)
		}
	}

	return arrayPair

}

function shuffleCards (arrayImages) {

	let shuffled = []

	for (let c = 0;c < arrayImages.length;c++) {

		while (true) {

			let random = arrayImages[Math.floor(Math.random() * arrayImages.length)]

			if (shuffled.indexOf(random) == -1) {
				
				shuffled.push(random)
				break

			}
		}

	}

	//console.log(shuffled)		// Print the order of the cards

	segredo123 = shuffled
	return shuffled

}