/*
 * Board Console View class
 * Given an array of places, will render them in grid fashion to the console
 */
function BoardConsoleView() {
	
}

BoardConsoleView.prototype.render = function(places) {
	var placeCount = 0;
	for (var y = 0; y < 9; y++) {
		var row = "";
		for (var x = 0; x < 11; x++) {
			if (x !== 0 && (x + 1) % 4 === 0) {
				row += "|";
			}
			else if (y !== 8 && (y + 1) % 3 === 0) {
				row += "_";
			}
			else if ((x - 1) % 4 === 0 && (y - 1) % 3 === 0) {
				row += places[placeCount++].getValue();
			}
			else {
				row += " ";
			}
		}
		console.log(row);
	}
};


// export the class
module.exports = BoardConsoleView;