/*
 * Tictactoe Console View class
 * Outputs state of a tictactoe game to the console
 */
function TicTacToeConsoleView(outputConsole) {
	this.console = outputConsole ? outputConsole : console;
}

TicTacToeConsoleView.prototype.welcome = function() {
	this.console.log("Welcome to a vicious match of Tic-Tac-Toe to the death!");
	this.console.log("In the eccentric \"x\" corner, we have Player 1");
	this.console.log("In the well-rounded \"o\" corner, we have Player 2");
	this.console.log("Behold their capacious arena, a strategical minefield in 3x3 form:");
};

// export the class
module.exports = TicTacToeConsoleView;