var Board = require('./board.js'),
	TicTacToeConsoleView = require('./tictactoe_console_view.js'),
	Player = require('./player.js'),
	Judge = require('./judge.js');

/*
 * Tictactoe class
 * Runs a game of tictactoe between two machine players
 */
function TicTacToe(view) {
	this.players = [new Player("x", "glad0s"), new Player("o", "T-800")];
	this.board = new Board(3, 3);
	this.turn = 0;
	this.view = view ? view : new TicTacToeConsoleView();
	this.judge = new Judge();
	this.finishedCallback = null;
}

//plays the game
TicTacToe.prototype.play = function(callback) {
	this.finishedCallback = callback;
	this.welcome();
	this.drawBoard();
	gameLoopInterval = this.setInterval(this.gameLoop.bind(this), 1000);
};

TicTacToe.prototype.gameLoop = function(times) {
	var hasFreePlaces = true;
	var hasWinner = false;
	do {
		hasFreePlaces = this.board.hasFreePlaces();
		hasWinner = this.hasWinner();
		if (!hasFreePlaces || hasWinner) {
			this.finish();
			if (gameLoopInterval) {
				clearInterval(gameLoopInterval);
			}
			return;
		}
		this.describeStateOfPlay();
		this.makeNextMove();
		this.drawBoard();
		this.incrementTurn();
	} while (this.hasGameLoopsRemaining(times, hasFreePlaces, hasWinner));
};

TicTacToe.prototype.hasGameLoopsRemaining = function(times, hasFreePlaces, hasWinner) {
	return times && times-- > 0 && hasFreePlaces && !hasWinner;
};

TicTacToe.prototype.setInterval = function(func, time) {
	return setInterval(func, time);
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
	this.view.describe(this.getPlayerForThisTurn(), this.board.getFreePlaces().length, this.turn);
};

TicTacToe.prototype.hasWinner = function() {
	return this.judge.findWinner(this.board.getPlaces());
};

TicTacToe.prototype.getWinner = function() {
	if (this.judge.getWinner() === this.players[0].getPieceType()) {
		return this.players[0];
	} else if (this.judge.getWinner() === this.players[1].getPieceType()) {
		return this.players[1];
	}
	return null;
};

TicTacToe.prototype.getLoser = function() {
	if (this.judge.getWinner() === this.players[0].getPieceType()) {
		return this.players[1];
	} else if (this.judge.getWinner() === this.players[1].getPieceType()) {
		return this.players[0];
	}
	return null;
};

TicTacToe.prototype.finish = function() {
	this.view.finish(this.getWinner(), this.getLoser(), this.board.getFreePlaces().length, this.turn);
	if (this.finishedCallback) {
		this.finishedCallback();
	}
};

// export the class
module.exports = TicTacToe;