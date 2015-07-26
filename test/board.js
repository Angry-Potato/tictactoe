var Board = require("../modules/board.js"),
	sinon = require('sinon');

suite("Board: ", function() {

	suite("Initial default state", function() {
		var subject = null;

		setup(function() {
			subject = new Board();
		});

		test("should have default width", function() {
			subject.should.have.property('width', 3);
		});

		test("should have default height", function() {
			subject.should.have.property('height', 3);
		});

		test("should have a view", function() {
			subject.should.have.property('view');
		});

		test("should have free places", function() {
			subject.hasFreePlaces().should.eql(true);
		});

		test("should have default number of places", function() {
			subject.should.have.property('places').with.lengthOf(9);
		});

		test("should consider all of its places free", function() {
			subject.getFreePlaces().should.have.length(9);
		});

		test("should call render with places on view when drawn", function() {
			var renderStub = sinon.stub(subject.view, 'render');

			subject.draw();

			renderStub.calledWith(subject.places).should.eql(true);
		});
	});

	suite("After construction", function() {
		var subject = null;

		setup(function() {
			subject = new Board(23, 42, "view");
		});

		test("should have the set width", function() {
			subject.should.have.property('width', 23);
		});

		test("should have the set height", function() {
			subject.should.have.property('height', 42);
		});

		test("should have the set view", function() {
			subject.should.have.property('view', "view");
		});

		test("should have the correct number of places according to height and width", function() {
			subject.should.have.property('places').with.lengthOf(23*42);
		});

		test("should have free places", function() {
			subject.hasFreePlaces().should.eql(true);
		});

		test("should consider all of its places free", function() {
			subject.getFreePlaces().should.have.length(23*42);
		});
	});

	suite("Full board", function() {
		var subject = null;

		setup(function() {
			subject = new Board();
			var places = subject.getFreePlaces();
			for (var i = 0; i < places.length; i++) {
				places[i].setValue("x");
			}
		});

		test("should have default number of places", function() {
			subject.should.have.property('places').with.lengthOf(9);
		});

		test("should not have free places", function() {
			subject.hasFreePlaces().should.eql(false);
		});
		
		test("should consider all of its places full", function() {
			subject.getFreePlaces().should.have.length(0);
		});
	});
});