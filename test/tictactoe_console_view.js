var TicTacToeConsoleView = require("../modules/tictactoe_console_view.js"),
	Player = require("../modules/player.js"),
	Board = require("../modules/board.js"),
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
			subject.welcome([new Player("x", "Player 1"), new Player("o", "Player 2")], new Board(3, 3));

			consoleLogStub.getCall(0).args[0].should.eql("Welcome to a vicious match of Tic-Tac-Toe to the death!");
			consoleLogStub.getCall(1).args[0].should.eql("In the eccentric \"x\" corner, we have Player 1");
			consoleLogStub.getCall(2).args[0].should.eql("In the well-rounded \"o\" corner, we have Player 2");
			consoleLogStub.getCall(3).args[0].should.eql("Behold their capacious arena, a strategical minefield in 3x3 form:");
		});

		test("should output describe message to console", function() {
			subject.describe(new Player("x", "Player 1"), 7, 3);

			consoleLogStub.callCount.should.be.above(0);
		});

		test("should output different describe message for last move", function() {
			subject.describe(new Player("x", "Player 1"), 1, 3);

			consoleLogStub.getCall(0).args[0].should.eql("3 moves made, but it's not quite in the bag yet!");
			consoleLogStub.getCall(1).args[0].should.eql("Player 1\'s turn, with 1 available move anything could happen!");
		});

		test("should not output moves made describe message when available moves is more than turns taken", function() {
			subject.describe(new Player("x", "Player 1"), 4, 0);

			consoleLogStub.getCall(0).args[0].should.eql("Player 1\'s turn, with 4 available moves we should see some exciting play!");
		});

		test("should output finish message to console", function() {
			subject.finish(new Player("x", "Player 1"), new Player("o", "Player 2"), 1, 1);

			consoleLogStub.callCount.should.be.above(0);
		});

		test("should describe final game state after a long game in finish message", function() {
			subject.finish(new Player("x", "Player 1"), new Player("o", "Player 2"), 1, 8);

			consoleLogStub.getCall(0).args[0].should.eql("After a gruelling 8 moves, Player 1 is left standing victorious!");
			consoleLogStub.getCall(1).args[0].should.eql("Better luck next time, Player 2.");
		});

		test("should describe final game state after a short game in finish message", function() {
			subject.finish(new Player("x", "Player 2"), new Player("o", "Player 1"), 6, 3);

			consoleLogStub.getCall(0).args[0].should.eql("3 moves is all Player 2 needed to secure a decisive victory over Player 1!");
			consoleLogStub.getCall(1).args[0].should.eql("Try hitting that random function a bit harder next time, Player 1.");
		});

		test("should describe final game state if no winner found", function() {
			subject.finish(null, new Player("o", "Player 1"), 6, 3);

			consoleLogStub.getCall(0).args[0].should.eql("Wow, no winner, cool story guys.");
		});
	});
});