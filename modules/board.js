var Place = require('./place.js'),
	BoardConsoleView = require("./board_console_view.js");

/*
 * Board class
 * Maintains an array representing all places on a game board.
 */
function Board(width, height, view) {
	// initialise empty board
	this.width = width ? width : 3;
	this.height = height ? height : 3;
	this.places = this.getEmptyBoard();
	this.view = view ? view : new BoardConsoleView();
}

//gets width coordinate of the board
Board.prototype.getWidth = function() {
	return this.width;
};

//gets height coordinate of the board
Board.prototype.getHeight = function() {
	return this.height;
};

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

/*
	Decided to create two separate functions for hasFreePlaces and getFreePlaces instead of simply
	relying on the array count returned by getFreePlaces because although they are similar, 
	hasFreePlaces has the chance of returning on the first loop whereas getFreePlaces should
	always check all the places on the board.
	Keeping these separate should lead to quicker board checks later on.
*/
//true if there are any places still free on the board
Board.prototype.hasFreePlaces = function() {
	for (var i = 0; i < this.places.length; i++) {
		if (this.places[i].isEmpty()) {
			return true;
		}
	}
	return false;
};

//get all free places left on the board
Board.prototype.getFreePlaces = function() {
	var freePlaces = [];
	for (var i = 0; i < this.places.length; i++) {
		if (this.places[i].isEmpty()) {
			freePlaces.push(this.places[i]);
		}
	}
	return freePlaces;
};

Board.prototype.draw = function() {
	this.view.render(this.places);
};
// export the class
module.exports = Board;