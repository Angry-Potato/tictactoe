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

	suite("During two turns of game play", function() {
		var subject = null;
		var boardDrawStub = null;

		setup(function() {
			subject = new TicTacToe();
			var hasFreePlacesStub = sinon.stub(subject.board, 'hasFreePlaces');
			hasFreePlacesStub.onCall(0).returns(true);
			hasFreePlacesStub.onCall(1).returns(true);
			hasFreePlacesStub.onCall(2).returns(false);
			boardDrawStub = sinon.stub(subject.board, 'draw');
		});

		test("should play until the board has no free places", function() {
			subject.should.have.property('turn', 0);

			subject.play();

			subject.should.have.property('turn', 2);
		});

		test("should ask the players to take turns", function() {
			var player1TakeTurnSpy = sinon.spy(subject.players[0], 'takeTurn');
			var player2TakeTurnSpy = sinon.spy(subject.players[1], 'takeTurn');

			subject.play();

			player1TakeTurnSpy.called.should.eql(true);
			player2TakeTurnSpy.called.should.eql(true);
		});

		test("should give the players the free spaces to choose from on their turn", function() {
			var player1TakeTurnStub = sinon.stub(subject.players[0], 'takeTurn');
			var player2TakeTurnStub = sinon.stub(subject.players[1], 'takeTurn');

			subject.play();

			player1TakeTurnStub.calledWith(subject.board.getFreePlaces()).should.eql(true);
			player2TakeTurnStub.calledWith(subject.board.getFreePlaces()).should.eql(true);
		});

		test("should draw the board at the start of the game and after each turn", function() {
			subject.play();

			boardDrawStub.callCount.should.eql(3);
		});
	});
});