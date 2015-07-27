/*
 * Board Console View class
 * Given an array of places, will render them in grid fashion to the console
 */
function BoardConsoleView(outputConsole) {
	this.horizontalPlacePadding = 1;
	this.verticalPlacePadding = 1;
	this.pad = " ";
	this.verticalLine = "|";
	this.horizontalLine = "_";
	this.width = 0;
	this.height = 0;
	this.console = outputConsole ? outputConsole : console;
}

BoardConsoleView.prototype.render = function(places) {
	this.calculateDimensions(places.length);
	var placeCount = 0;
	for (var y = 0; y < this.height; y++) {
		var row = "";
		for (var x = 0; x < this.width; x++) {
			if (this.isColumnVerticalLine(x)) {
				row += this.verticalLine;
			}
			else if (this.isRowHorizontalLine(y)) {
				row += this.horizontalLine;
			}
			else if (this.isCenterOfBox(x,y)) {
				row += places[placeCount++].getValue();
			}
			else {
				row += this.pad;
			}
		}
		this.console.log(row);
	}
};

BoardConsoleView.prototype.calculateDimensions = function(placeCount) {
	var sqRoot = Math.sqrt(placeCount);
	this.width = this.calculateWidth(placeCount, sqRoot);
	this.height = this.calculateHeight(placeCount, sqRoot);
};

BoardConsoleView.prototype.calculateWidth = function(placeCount, sqRoot) {
	return (this.horizontalPlacePadding*2 + 1)*sqRoot + (sqRoot-1);
};

BoardConsoleView.prototype.calculateHeight = function(placeCount, sqRoot) {
	return (this.verticalPlacePadding*2 + 1)*sqRoot;
};

BoardConsoleView.prototype.isColumnVerticalLine = function(x) {
	return x > 0 && (x + 1) % (this.horizontalPlacePadding*2 + 2) === 0;
};

BoardConsoleView.prototype.isRowHorizontalLine = function(y) {
	return y < this.height-1 && (y + 1) % (this.verticalPlacePadding*2 + 1) === 0;
};

BoardConsoleView.prototype.isCenterOfBox = function(x,y) {
	return (x - 1) % (this.horizontalPlacePadding*2 + 2) === 0 && (y - 1) % (this.verticalPlacePadding*2 + 1) === 0;
};

// export the class
module.exports = BoardConsoleView;