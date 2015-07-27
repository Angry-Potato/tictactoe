/*
 * Tictactoe Console View class
 * Outputs state of a tictactoe game to the console
 */
function TicTacToeConsoleView(outputConsole) {
	this.console = outputConsole ? outputConsole : console;
}

TicTacToeConsoleView.prototype.welcome = function(players, board) {
	this.console.log("Welcome to a vicious match of Tic-Tac-Toe to the death!");
	this.console.log("In the eccentric \"" + players[0].getPieceType() + "\" corner, we have " + players[0].getName());
	this.console.log("In the well-rounded \"" + players[1].getPieceType() + "\" corner, we have " + players[1].getName());
	this.console.log("Behold their capacious arena, a strategical minefield in " + board.getWidth() + "x" + board.getHeight() + " form:");
};

TicTacToeConsoleView.prototype.describe = function(player, freePlacesCount, totalTurnsTaken) {
	if (this.overHalfWay(freePlacesCount, totalTurnsTaken)) {
		this.console.log(totalTurnsTaken + " moves made, but it's not quite in the bag yet!");
	}
	if (!this.isLastTurn(freePlacesCount)) {
		this.console.log(player.getName() + "\'s turn, with " + freePlacesCount + " available moves we should see some exciting play!");
	}
	else {
		this.console.log(player.getName() + "\'s turn, with " + freePlacesCount + " available move anything could happen!");
	}
};

TicTacToeConsoleView.prototype.overHalfWay = function(freePlacesCount, totalTurnsTaken) {
	return freePlacesCount < totalTurnsTaken;
};

TicTacToeConsoleView.prototype.isLastTurn = function(freePlacesCount) {
	return freePlacesCount === 1;
};

TicTacToeConsoleView.prototype.finish = function(winner, loser, freePlacesCount, totalTurnsTaken) {
	if (this.overHalfWay(freePlacesCount, totalTurnsTaken)) {
		this.console.log("After a gruelling " + totalTurnsTaken + " moves, " + winner.getName() + " is left standing victorious!");
		this.console.log("Better luck next time, " + loser.getName() + ".");
	}
	else {
		this.console.log(totalTurnsTaken + " moves is all " + winner.getName() + " needed to secure a decisive victory over " + loser.getName() + "!");
		this.console.log("Try hitting that random function a bit harder next time, " + loser.getName() + ".");
	}
};
// export the class
module.exports = TicTacToeConsoleView;