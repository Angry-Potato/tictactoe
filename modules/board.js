/*
 * Board class
 */
function Board(places, height, width) {
	// initialise empty board
	this.height = height ? height : 3;
	this.width = width ? width : 3;
	this.places = places ? places : [];
}

// export the class
module.exports = Board;