var BoardConsoleView = require("../modules/board_console_view.js"),
	Place = require("../modules/place.js"),
	sinon = require('sinon');

suite("BoardConsoleView: ", function() {

	suite("Initial default state", function() {
		var subject = null;

		setup(function() {
			subject = new BoardConsoleView();
		});

		test("should have a horizontalPlacePadding", function() {
			subject.should.have.property('horizontalPlacePadding');
		});
		
		test("should have a verticalPlacePadding", function() {
			subject.should.have.property('verticalPlacePadding');
		});
		
		test("should have a pad", function() {
			subject.should.have.property('pad');
		});
		
		test("should have a verticalLine", function() {
			subject.should.have.property('verticalLine');
		});
		
		test("should have a horizontalLine", function() {
			subject.should.have.property('horizontalLine');
		});
		
		test("should have a width", function() {
			subject.should.have.property('width');
		});
		
		test("should have a height", function() {
			subject.should.have.property('height');
		});
		
		test("should have a console", function() {
			subject.should.have.property('console');
		});
	});
	suite("After construction", function() {
		var subject = null;
		var consoleLogStub = null;

		setup(function() {
			subject = new BoardConsoleView();
			consoleLogStub = sinon.stub(subject.console, 'log');
		});

		teardown(function() {
			subject.console.log.restore();
		});

		test("should render to the console", function() {
			var places = [new Place(1,2," "),new Place(1,2," "),new Place(1,2," "),new Place(1,2," ")];
			subject.render(places);

			consoleLogStub.callCount.should.not.be.below(places.length);
		});

		test("should render a grid", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push(new Place(x, y, " "));
				}
			}
			subject.render(places);

			consoleLogStub.getCall(0).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(1).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(2).args[0].should.eql("___|___|___");
			consoleLogStub.getCall(3).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(4).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(5).args[0].should.eql("___|___|___");
			consoleLogStub.getCall(6).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(7).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(8).args[0].should.eql("   |   |   ");
		});

		test("should render a grid with pieces", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push(new Place(x, y, "x"));
				}
			}
			subject.render(places);

			consoleLogStub.getCall(0).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(1).args[0].should.eql(" x | x | x ");
			consoleLogStub.getCall(2).args[0].should.eql("___|___|___");
			consoleLogStub.getCall(3).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(4).args[0].should.eql(" x | x | x ");
			consoleLogStub.getCall(5).args[0].should.eql("___|___|___");
			consoleLogStub.getCall(6).args[0].should.eql("   |   |   ");
			consoleLogStub.getCall(7).args[0].should.eql(" x | x | x ");
			consoleLogStub.getCall(8).args[0].should.eql("   |   |   ");
		});
	});
});