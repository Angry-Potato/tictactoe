var Board = require("../modules/board.js");

suite("Board", function() {
	suite("Initial state", function() {
		var subject = null;
		setup(function() {
			subject = new Board();
		});
		it("should have places", function() {
			subject.should.have.property('places');
		});
	});
});