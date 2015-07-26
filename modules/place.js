/*
 * Place class
 * Represents a place on a game board
 */
function Place(x, y, value) {
	this.x = x;
	this.y = y;
	this.value = value ? value : " ";
}

//gets x coordinate of the place
Place.prototype.getX = function() {
	return this.x;
};

//gets y coordinate of the place
Place.prototype.getY = function() {
	return this.y;
};

//gets current value in the place
Place.prototype.getValue = function() {
	return this.value;
};

//sets current value of the place
Place.prototype.setValue = function(value) {
	this.value = value;
};

//returns true if current value is an empty space
Place.prototype.isEmpty = function() {
	return this.value === " ";
};


// export the class
module.exports = Place;