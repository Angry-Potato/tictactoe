/*
 * Tictactoe Console View class
 * Outputs state of a tictactoe game to the console
 */
function TicTacToeConsoleView(outputConsole) {
	this.console = outputConsole ? outputConsole : console;
}

TicTacToeConsoleView.prototype.welcome = function() {

};

// export the class
module.exports = TicTacToeConsoleView;