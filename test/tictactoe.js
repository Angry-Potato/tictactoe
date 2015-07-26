var TicTacToe = require("../modules/tictactoe.js"),
	sinon = require('sinon');

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
	suite("During game play", function() {
		var subject = null;
		setup(function() {
			subject = new TicTacToe();
		});
		test("should be able to increment the turn", function() {
			subject.should.have.property('turn', 0);
			subject.incrementTurn();
			subject.should.have.property('turn', 1);
		});
		test("should play untill the board has no free places", function() {
			var hasFreePlacesStub = sinon.stub(subject.board, 'hasFreePlaces');
			hasFreePlacesStub.onCall(0).returns(true);
			hasFreePlacesStub.onCall(1).returns(true);
			hasFreePlacesStub.onCall(2).returns(false);

			subject.should.have.property('turn', 0);
			subject.play();
			subject.should.have.property('turn', 2);
		});
	});
});