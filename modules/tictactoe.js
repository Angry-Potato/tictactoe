var Board = require('./board.js'),
	TicTacToeConsoleView = require('./tictactoe_console_view.js'),
	Player = require('./player.js');

/*
 * Tictactoe class
 * Runs a game of tictactoe between two machine players
 */
function TicTacToe(view) {
	this.players = [new Player("x", "glad0s"), new Player("o", "T-800")];
	this.board = new Board(3, 3);
	this.turn = 0;
	this.view = view ? view : new TicTacToeConsoleView();
}

//plays the game
TicTacToe.prototype.play = function() {
	this.welcome();
	this.drawBoard();
	while (this.board.hasFreePlaces()) {
		this.describeStateOfPlay();
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
	} else {
		return this.players[1];
	}
};

TicTacToe.prototype.drawBoard = function() {
	this.board.draw();
};

TicTacToe.prototype.welcome = function() {
	this.view.welcome(this.players, this.board);
};

TicTacToe.prototype.describeStateOfPlay = function() {
	this.view.describe(this.getPlayerForThisTurn(), this.board.getFreePlaces().length);
};


// export the class
module.exports = TicTacToe;