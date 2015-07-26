var Board = require('./board.js');
var Player = require('./player.js');

/*
 * Tictactoe class
 * Runs a game of tictactoe between two machine players
 */
function TicTacToe() {
	this.players = [new Player("x"), new Player("o")];
	this.board = new Board(3, 3);
	this.turn = 0;
}

//plays the game
TicTacToe.prototype.play = function() {
	while (this.board.hasFreePlaces()) {
		this.incrementTurn();
	}
};


TicTacToe.prototype.incrementTurn = function() {
	this.turn++;
};



// export the class
module.exports = TicTacToe;