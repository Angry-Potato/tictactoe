var Player = require("../modules/player.js");

suite("Player", function() {
	suite("Initial default state", function() {
		var subject = null;
		setup(function() {
			subject = new Player();
		});
		test("should have an undefined pieceType", function() {
			subject.should.have.property('pieceType', undefined);
		});
	});
});