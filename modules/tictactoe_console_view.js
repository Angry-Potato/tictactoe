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

};

// export the class
module.exports = TicTacToeConsoleView;