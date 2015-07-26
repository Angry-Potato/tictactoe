var Board = require("../modules/board.js");

suite("Board", function() {
	suite("Initial default state", function() {
		var subject = null;
		setup(function() {
			subject = new Board();
		});
		test("should have places", function() {
			subject.should.have.property('places', []);
		});
		test("should have height", function() {
			subject.should.have.property('height', 3);
		});
		test("should have width", function() {
			subject.should.have.property('width', 3);
		});
	});
});