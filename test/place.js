var Place = require("../modules/place.js");

suite("Place", function() {
	suite("Initial default state", function() {
		var subject = null;
		setup(function() {
			subject = new Place();
		});
		test("should have an x coordinate", function() {
			subject.should.have.property('x');
		});
		test("should have a y coordinate", function() {
			subject.should.have.property('y');
		});
	});
});