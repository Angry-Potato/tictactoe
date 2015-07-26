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
	this.drawBoard();
	while (this.board.hasFreePlaces()) {
		this.makeNextMove();
		this.drawBoard();
		this.incrementTurn();
	}
};

TicTacToe.prototype.incrementTurn = function() {
	this.turn++;
};

TicTacToe.prototype.makeNextMove = function() {
	this.getPlayerForThisTurn().takeTurn(this.board.getFreePlaces());
};

TicTacToe.prototype.getPlayerForThisTurn = function() {
	if (this.turn % 2 === 0) {
		return this.players[0];
	}
	else {
		return this.players[1];
	}
};

TicTacToe.prototype.drawBoard = function() {
	this.board.draw();
};


// export the class
module.exports = TicTacToe;