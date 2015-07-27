var Random = require("../modules/random.js");

suite("Random: ", function() {

	suite("After construction", function() {
		var subject = null;

		setup(function() {
			subject = new Random();
		});

		test("should return a random int within the specified range", function() {
			var result = subject.randomInt(0,100);

			result.should.be.above(-1);
			result.should.be.below(100);
		});
	});
});