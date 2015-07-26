var TicTacToe = require("../modules/tictactoe.js");

suite("TicTacToe: ", function() {
	suite("Initial default state", function() {
		var subject = null;
		setup(function() {
			subject = new TicTacToe();
		});
		test("should have two players", function() {
			subject.should.have.property('players').with.lengthOf(2);
		});
		test("should have a board", function() {
			subject.should.have.property('board');
		});
		test("should have a turn counter", function() {
			subject.should.have.property('turn', 0);
		});
	});
	suite("After construction", function() {
		var subject = null;
		setup(function() {
			subject = new TicTacToe();
		});
		test("should be able to increment the turn", function() {
			subject.should.have.property('turn', 0);
			subject.incrementTurn();
			subject.should.have.property('turn', 1);
		});
	});
});