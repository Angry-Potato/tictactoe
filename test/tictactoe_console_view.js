var TicTacToeConsoleView = require("../modules/tictactoe_console_view.js"),
	sinon = require('sinon');

suite("TicTacToeConsoleView: ", function() {

	suite("Initial default state", function() {
		var subject = null;

		setup(function() {
			subject = new TicTacToeConsoleView();
		});
		
		test("should have a console", function() {
			subject.should.have.property('console');
		});
	});

	suite("After construction", function() {
		var subject = null;
		var consoleLogStub = null;

		setup(function() {
			subject = new TicTacToeConsoleView();
			consoleLogStub = sinon.stub(subject.console, 'log');
		});

		teardown(function() {
			subject.console.log.restore();
		});
		
		test("should output welcome message to console", function() {
			subject.welcome();

			consoleLogStub.getCall(0).args[0].should.eql("Welcome to a vicious match of Tic-Tac-Toe to the death!");
			consoleLogStub.getCall(1).args[0].should.eql("In the eccentric \"x\" corner, we have Player 1");
			consoleLogStub.getCall(2).args[0].should.eql("In the well-rounded \"o\" corner, we have Player 2");
			consoleLogStub.getCall(3).args[0].should.eql("Behold their capacious arena, a strategical minefield in 3x3 form:");
		});
	});
});