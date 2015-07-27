var Judge = require("../modules/judge.js"),
	Place = require("../modules/place.js");

suite("Judge: ", function() {

	suite("Initial default state", function() {
		var subject = null;

		setup(function() {
			subject = new Judge();
		});

		test("should have an undefined winner", function() {
			subject.should.have.property('winner', undefined);
		});
	});

	suite("After construction", function() {
		var subject = null;

		setup(function() {
			subject = new Judge();
		});

		test("should find no winner in a given array of empty board places", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push(new Place(x, y, " "));
				}
			}
			subject.findWinner(places).should.eql(false);
			subject.should.have.property('winner', undefined);
		});

		test("should find no winner in a fully populated array of mixed board places", function() {
			var places = [new Place(0, 0, "x"), new Place(1, 0, "x"), new Place(2, 0, "o"), new Place(0, 1, "o"), new Place(1, 1, "o"), new Place(2, 1, "x"), new Place(0, 2, "x"), new Place(1, 2, "o"), new Place(2, 2, "o")];

			subject.findWinner(places).should.eql(false);
			subject.should.have.property('winner', undefined);
		});

		test("should find a vertical line winner in a given array of board places", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push(x === 2 ? new Place(x, y, "x") : new Place(x, y, " "));
				}
			}
			subject.findWinner(places).should.eql(true);
			subject.should.have.property('winner', "x");
		});

		test("should find a horizontal line winner in a given array of board places", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push(y === 2 ? new Place(x, y, " ") : new Place(x, y, "o"));
				}
			}
			subject.findWinner(places).should.eql(true);
			subject.should.have.property('winner', "o");
		});

		test("should find a downward diagonal line winner in a given array of board places", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push(x === y ? new Place(x, y, "o") : new Place(x, y, " "));
				}
			}
			subject.findWinner(places).should.eql(true);
			subject.should.have.property('winner', "o");
		});

		test("should find an upward diagonal line winner in a given array of board places", function() {
			var places = [];
			for (var y = 0; y < 3; y++) {
				for (var x = 0; x < 3; x++) {
					places.push((x + y) === 2 ? new Place(x, y, "o") : new Place(x, y, " "));
				}
			}

			subject.findWinner(places).should.eql(true);
			subject.should.have.property('winner', "o");
		});

		test("should not find a win where there is none", function() {
			var places = [new Place(0, 0, "o"), new Place(1, 0, "o"), new Place(2, 0, "x"), new Place(0, 1, "x"), new Place(1, 1, "o"), new Place(2, 1, " "), new Place(0, 2, "x"), new Place(1, 2, " "), new Place(2, 2, "x")];

			subject.findWinner(places).should.eql(false);
			subject.should.have.property('winner', undefined);
		});
	});
});