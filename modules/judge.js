var PlayerData = require('./player_data.js');
/*
 * Judge class
 * Finds a winner in an array of places based on matching vertical, horizontal, or diagonal pieces in a line
 */
function Judge() {
	this.winner = undefined;
}

Judge.prototype.getWinner = function() {
	return this.winner;
};

Judge.prototype.findWinner = function(places) {
	var sqRoot = Math.sqrt(places.length);
	var playerData = this.gatherPlayerDataFromTheBoard(places, sqRoot);
	return this.examinePlayerDataForWinner(playerData, sqRoot);
};

Judge.prototype.gatherPlayerDataFromTheBoard = function(places, sqRoot) {
	var playerData = [];
	for (var i = 0; i < places.length; i++) {
		if (places[i].isEmpty()) {
			continue;
		}
		if (!this.alreadyContainsDataForPlayer(playerData, places[i].getValue())) {
			playerData.push(new PlayerData(places[i].getValue()));
		}

		var data = this.getPlayerData(playerData, places[i].getValue());
		if (this.isOnTheDownwardDiagonalLine(places[i].getX(), places[i].getY())) {
			data.incrementDownwardDiagonalCount();
		}
		if (this.isOnTheUpwardDiagonalLine(places[i].getX(), places[i].getY(), sqRoot)) {
			data.incrementUpwardDiagonalCount();
		}
		data.incrementCountForColumn((places[i].getX()));
		data.incrementCountForRow((places[i].getY()));
	}
	return playerData;
};

Judge.prototype.examinePlayerDataForWinner = function(playerData, sqRoot) {
	for (var j = 0; j < playerData.length; j++) {
		if (this.hasDiagonalWin(playerData[j], sqRoot) ||
			this.hasStraightLineWin(playerData[j].getColumnCounts(), sqRoot) ||
			this.hasStraightLineWin(playerData[j].getRowCounts(), sqRoot)) {
			this.winner = playerData[j].getPieceType();
			return true;
		}
	}
	return false;
};

Judge.prototype.isOnTheDownwardDiagonalLine = function(x, y) {
	return x === y;
};

Judge.prototype.isOnTheUpwardDiagonalLine = function(x, y, sqRoot) {
	return (x + y) === (sqRoot - 1);
};

Judge.prototype.alreadyContainsDataForPlayer = function(playerData, pieceType) {
	for (var j = 0; j < playerData.length; j++) {
		if (playerData[j].getPieceType() === pieceType) {
			return true;
		}
	}
	return false;
};

Judge.prototype.getPlayerData = function(playerData, pieceType) {
	for (var j = 0; j < playerData.length; j++) {
		if (playerData[j].getPieceType() === pieceType) {
			return playerData[j];
		}
	}
	return null;
};

Judge.prototype.hasDiagonalWin = function(playerData, target) {
	return playerData.getDownwardDiagonalCount() === target || playerData.getUpwardDiagonalCount() === target;
};

Judge.prototype.hasStraightLineWin = function(counts, target) {
	return counts.some(function(item) {
		return item === target;
	});
};

// export the class
module.exports = Judge;