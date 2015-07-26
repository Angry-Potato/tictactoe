/*
 * Random class
 * Utility functions to generate random primitives
 */
function Random() {
}

//returns a random integer within the specified range (low-end is inclusive, high-end is exclusive)
Random.prototype.randomInt = function(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
};


// export the class
module.exports = Random;