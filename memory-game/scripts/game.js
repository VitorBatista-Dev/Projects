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

	for (let a = 0;c < arrayImages.length;c++) {
		
		console.log(arrayImages)
		console.log(arrayImages[c])

	}

}