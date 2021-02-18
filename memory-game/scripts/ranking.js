  var firebaseConfig = {
    	apiKey: "AIzaSyDDmE22T_BGxWV1-1q4seJv1_18JcglG_0",
    	authDomain: "ranking-f5fb4.firebaseapp.com",
    	projectId: "ranking-f5fb4",
    	storageBucket: "ranking-f5fb4.appspot.com",
    	messagingSenderId: "660626075012",
	appId: "1:660626075012:web:03d765e38720a13f5881d1",
	measurementId: "G-KD9RZTLGY1"
}

firebase.initializeApp(firebaseConfig)


let db = firebase.firestore()

function addPerson () {

	let docRef = db.collection("Pessoas").doc("Nomes")
	let rankingElement = document.getElementById("ranking")

	docRef.get().then(doc => {

		if (doc.exists) {

			console.log("Document data", doc.data())

		}

		else {

			console.log("No such document")

		}
	})


}

function createRankingCard (name, moves, position) {		// Create The ranking card


	let rankingCard = document.createElement("div")
	let positionElement = document.createElement("h1")
	let data = document.createElement("div")
	let nameElement = document.createElement("p")
	let movesElement = document.createElement("p")

	nameElement.innerHTML = `Nome: ${name}`
	movesElement.innerHTML = `Movimentos: ${moves}`

	positionElement.innerHTML = position

	rankingCard.classList.add("ranking-card")
	positionElement.classList.add("number")
	data.classList.add("datas")

	data.appendChild(nameElement)
	data.appendChild(movesElement)
	rankingCard.appendChild(positionElement)
	rankingCard.appendChild(data)

	return rankingCard
}