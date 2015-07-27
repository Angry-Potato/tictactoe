var TicTacToe = require("../modules/tictactoe.js"),
	sinon = require('sinon');

suite("TicTacToe: ", function() {

gameLoopInterval = null;
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

		test("should have a view", function() {
			subject.should.have.property('view');
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
		var welcomeMessageStub = null;
		var describeMessageStub = null;
		var finishMessageStub = null;

		setup(function() {
			subject = new TicTacToe();
			sinon.stub(subject.judge, 'findWinner').returns(false);
			var hasFreePlacesStub = sinon.stub(subject.board, 'hasFreePlaces');
			sinon.stub(subject, 'setInterval').callsArgWith(0,3);
			hasFreePlacesStub.onCall(0).returns(true);
			hasFreePlacesStub.onCall(1).returns(true);
			hasFreePlacesStub.onCall(2).returns(false);
			boardDrawStub = sinon.stub(subject.board, 'draw');
			welcomeMessageStub = sinon.stub(subject.view, 'welcome');
			describeMessageStub = sinon.stub(subject.view, 'describe');
			finishMessageStub = sinon.stub(subject.view, 'finish');
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

		test("should describe the state of play before each turn", function() {
			subject.play();

			describeMessageStub.callCount.should.eql(2);
			describeMessageStub.getCall(0).args[0].should.eql(subject.players[0]);
			describeMessageStub.getCall(0).args[1].should.eql(9);
			describeMessageStub.getCall(0).args[2].should.eql(0);
			describeMessageStub.getCall(1).args[0].should.eql(subject.players[1]);
			describeMessageStub.getCall(1).args[1].should.eql(8);
			describeMessageStub.getCall(1).args[2].should.eql(1);
		});
	});

	suite("In an entire playthrough with no winner", function() {
		var subject = null;
		var boardDrawStub = null;
		var welcomeMessageStub = null;
		var describeMessageStub = null;
		var player1TakeTurnSpy = null;
		var player2TakeTurnSpy = null;
		var finishMessageStub = null;

		setup(function() {
			subject = new TicTacToe();
			sinon.stub(subject.judge, 'findWinner').returns(false);
			sinon.stub(subject, 'setInterval').callsArgWith(0,9);
			boardDrawStub = sinon.stub(subject.board, 'draw');
			welcomeMessageStub = sinon.stub(subject.view, 'welcome');
			describeMessageStub = sinon.stub(subject.view, 'describe');
			player1TakeTurnSpy = sinon.spy(subject.players[0], 'takeTurn');
			player2TakeTurnSpy = sinon.spy(subject.players[1], 'takeTurn');
			finishMessageStub = sinon.stub(subject.view, 'finish');
		});

		test("should output the welcome message once", function() {
			subject.play();

			welcomeMessageStub.callCount.should.eql(1);
		});

		test("should output the finish message once", function() {
			subject.play();

			finishMessageStub.callCount.should.eql(1);
		});

		test("should describe the state of play once before each turn", function() {
			subject.play();

			describeMessageStub.callCount.should.eql(9);
		});

		test("should draw the board at the start of the game and after each turn", function() {
			subject.play();

			boardDrawStub.callCount.should.eql(10);
		});

		test("should play until the board has no free places", function() {
			subject.should.have.property('turn', 0);

			subject.play();

			subject.should.have.property('turn', 9);
		});

		test("should ask the players to take all their turns", function() {
			subject.play();

			player1TakeTurnSpy.callCount.should.eql(5);
			player2TakeTurnSpy.callCount.should.eql(4);
		});
	});

	suite("In an entire playthrough with a winner", function() {
		var subject = null;
		var boardDrawStub = null;
		var welcomeMessageStub = null;
		var describeMessageStub = null;
		var finishMessageStub = null;

		setup(function() {
			subject = new TicTacToe();
			sinon.stub(subject.board, 'hasFreePlaces').returns(true);
			sinon.stub(subject, 'setInterval').callsArgWith(0,9);
			var hasWinnerStub = sinon.stub(subject, 'hasWinner');
			hasWinnerStub.onCall(0).returns(false);
			hasWinnerStub.onCall(1).returns(false);
			hasWinnerStub.onCall(2).returns(false);
			hasWinnerStub.onCall(3).returns(false);
			hasWinnerStub.onCall(4).returns(false);
			hasWinnerStub.onCall(5).returns(false);
			hasWinnerStub.onCall(6).returns(false);
			hasWinnerStub.onCall(7).returns(false);
			hasWinnerStub.onCall(8).returns(false);
			hasWinnerStub.onCall(9).returns(true);
			boardDrawStub = sinon.stub(subject.board, 'draw');
			welcomeMessageStub = sinon.stub(subject.view, 'welcome');
			describeMessageStub = sinon.stub(subject.view, 'describe');
			finishMessageStub = sinon.stub(subject.view, 'finish');
		});

		test("should play until the board has a winner", function() {
			subject.should.have.property('turn', 0);

			subject.play();

			subject.should.have.property('turn', 9);
		});

		test("should output the welcome message once", function() {
			subject.play();

			welcomeMessageStub.callCount.should.eql(1);
		});

		test("should output the finish message once", function() {
			subject.play();

			finishMessageStub.callCount.should.eql(1);
		});
	});
});