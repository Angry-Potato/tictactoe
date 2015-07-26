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
	suite("After construction", function() {
		var subject = null;
		setup(function() {
			subject = new Player("codpiece");
		});
		test("should have the set pieceType", function() {
			subject.should.have.property('pieceType', "codpiece");
		});
	});
});