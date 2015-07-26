var Place = require('./place.js');

/*
 * Board class
 * Maintains an array representing all places on a game board.
 */
function Board(width, height) {
	// initialise empty board
	this.width = width ? width : 3;
	this.height = height ? height : 3;
	this.places = this.getEmptyBoard();
}

//gets an array of empty pieces according to the height and width of the board
Board.prototype.getEmptyBoard = function() {
	var places = [];
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			places.push(new Place(x, y, " "));
		}
	}
	return places;
};

// export the class
module.exports = Board;