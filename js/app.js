
var player1 = {
	currentPosition: 100,
	wins: 0,

};
// Player 2 moves when key m is pressed
var player2 = {
	currentPosition: 100,
	wins: 0
};
var racer1 = document.getElementById("racer1");
var racer2 = document.getElementById("racer2");
var racer1Position = racer1.style.marginLeft;
var player1position = 100;
var player2position = 100;
window.addEventListener("keydown", getKeyPressedDown, false);
var winnerName = "";

function getKeyPressedDown(key) {
	console.log("keyevent" + key)
	switch (event.keyCode) {
		case 90:
			// Move Player 1 right
			movePlayer1right();
			console.log("z pressed")
			break;
		case 77:
			// Move player 2 right
			movePlayer2right();
			console.log("m pressed")
			break;
		default: 
			break;
	}
}
// Player 1 moves when key z is pressed
function movePlayer1right() {
	if (player1.currentPosition < 1000) {
		console.log(player1.currentPosition);
		player1.currentPosition += 50;
		racer1.style.marginLeft = player1.currentPosition + 'px';
	} else {
		console.log("player1 won");
		checkForPlayer1Win();
		
	}

}
// Player 2 moves when 
function movePlayer2right() {
	if (player2.currentPosition < 1000) {
		console.log(player2.currentPosition);
		player2.currentPosition += 50;
		racer2.style.marginLeft = player2.currentPosition + 'px';
	} else {
		console.log("player2 won");
		checkForPlayer2Win();
		
	}
}


function playerWon(winnerName) {
	
	var winner = document.createElement("div");
	winner.setAttribute("class", "winnerLabel");
	var newContent = document.createTextNode(winnerName + "Wins!");
	winner.appendChild(newContent);
	document.body.appendChild(winner);

}

function checkForPlayer1Win() {
	console.log("Player1 won");
	player1.wins++;
	console.log("player 1 wins are " + player1.wins);
	winnerName = "McQueen";
	playerWon(winnerName);

}
function checkForPlayer2Win() {
	console.log("Player1 won");
	player2.wins++;
	console.log("player 1 wins are " + player1.wins);
	winnerName = "Mater";
	playerWon(winnerName);

}

/*
player1.prototype.moveRight = function() {

};
player2.prototype.moveRight = function() {

};
*/

