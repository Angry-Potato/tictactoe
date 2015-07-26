var Random = require('./random.js');

/*
 * Player class
 * Makes random moves in a given array of available moves
 */
function Player(pieceType) {
	this.pieceType = pieceType;
	this.random = new Random();
}

Player.prototype.takeTurn = function(availablePlaces) {
	if (!availablePlaces || availablePlaces.length === 0) {
		return;
	}
	var place = availablePlaces[this.random.randomInt(0, availablePlaces.length)];
	place.setValue(this.pieceType);
};

// export the class
module.exports = Player;