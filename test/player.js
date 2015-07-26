var Player = require("../modules/player.js"),
	Place = require("../modules/place.js"),
	sinon = require('sinon');

suite("Player: ", function() {

	suite("Initial default state", function() {
		var subject = null;

		setup(function() {
			subject = new Player();
		});

		test("should have an undefined pieceType", function() {
			subject.should.have.property('pieceType', undefined);
		});

		test("should have a random utility", function() {
			subject.should.have.property('random');
		});
	});

	suite("After construction", function() {
		var subject = null;

		setup(function() {
			subject = new Player("codpiece");
		});

		test("should have the set pieceType", function() {
			subject.should.have.property('pieceType', "codpiece");
		});

		test("should have a random utility", function() {
			subject.should.have.property('random');
		});
	});

	suite("During game play", function() {
		var subject = null;

		setup(function() {
			subject = new Player("x");
		});

		test("should not take turn if given null or empty array", function() {
			var randomIntSpy = sinon.spy(subject.random, 'randomInt');

			subject.takeTurn(null);
			randomIntSpy.called.should.eql(false);

			subject.takeTurn([]);
			randomIntSpy.called.should.eql(false);
		});

		test("should call the random function during its turn", function() {
			var randomIntSpy = sinon.spy(subject.random, 'randomInt');

			subject.takeTurn([new Place(1,2," ")]);

			randomIntSpy.called.should.eql(true);
		});

		test("should set its piece type as the value on a random place during its turn", function() {
			var randomIntStub = sinon.stub(subject.random, 'randomInt');
			randomIntStub.onCall(0).returns(1);
			
			var freePlaces = [new Place(1,2," "),new Place(2,2," ")];
			subject.takeTurn(freePlaces);

			freePlaces[0].getValue().should.eql(" ");
			freePlaces[1].getValue().should.eql("x");
		});
	});
});