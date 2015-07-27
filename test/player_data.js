var PlayerData = require("../modules/player_data.js");

suite("PlayerData: ", function() {

	suite("Initial default state", function() {
		var subject = null;

		setup(function() {
			subject = new PlayerData();
		});

		test("should have an x array", function() {
			subject.should.have.property('x',[]);
		});

		test("should have a y array", function() {
			subject.should.have.property('y',[]);
		});

		test("should have a downwardDiagonalPieces count", function() {
			subject.should.have.property('downwardDiagonalPieces', 0);
		});

		test("should have a upwardDiagonalPieces count", function() {
			subject.should.have.property('upwardDiagonalPieces', 0);
		});

		test("should have an undefined pieceType", function() {
			subject.should.have.property('pieceType', undefined);
		});
	});

	suite("After construction", function() {
		var subject = null;
		
		setup(function() {
			subject = new PlayerData("b");
		});

		test("should have the set pieceType", function() {
			subject.should.have.property('pieceType', "b");
		});

		test("should increment the downwardDiagonalPieces count", function() {
			subject.should.have.property('downwardDiagonalPieces', 0);
			subject.incrementDownwardDiagonalCount();
			subject.should.have.property('downwardDiagonalPieces', 1);
		});

		test("should increment the upwardDiagonalPieces count", function() {
			subject.should.have.property('upwardDiagonalPieces', 0);
			subject.incrementUpwardDiagonalCount();
			subject.should.have.property('upwardDiagonalPieces', 1);
		});

		test("should increment the count for a specified column", function() {
			var x = [];
			subject.should.have.property('x', x);
			subject.incrementCountForColumn(11);
			x[11] = 0;
			x[11]++;
			subject.should.have.property('x', x);
		});

		test("should increment the count for a specified row", function() {
			var y = [];
			subject.should.have.property('y', y);
			subject.incrementCountForRow(3);
			y[3] = 0;
			y[3]++;
			subject.should.have.property('y', y);
		});
	});
});