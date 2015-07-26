var Place = require("../modules/place.js");

suite("Place: ", function() {
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
		test("should have a value", function() {
			subject.should.have.property('value', " ");
		});
		test("should consider itself empty", function() {
			subject.isEmpty().should.eql(true);
		});
	});
	suite("After construction", function() {
		var subject = null;
		setup(function() {
			subject = new Place(32, 54, "tiger");
		});
		test("should have the set x coordinate", function() {
			subject.should.have.property('x', 32);
		});
		test("should have the set y coordinate", function() {
			subject.should.have.property('y', 54);
		});
		test("should have the set value", function() {
			subject.should.have.property('value', "tiger");
		});
		test("should be able to change value", function() {
			subject.setValue("elephant");
			subject.should.have.property('value', "elephant");
		});
		test("should consider itself not empty", function() {
			subject.isEmpty().should.eql(false);
		});
	});
});