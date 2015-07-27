/*
 * PlayerData class
 */
function PlayerData(pieceType) {
	this.x = [];
	this.y = [];
	this.downwardDiagonalPieces = 0;
	this.upwardDiagonalPieces = 0;
	this.pieceType = pieceType;
}

PlayerData.prototype.getPieceType = function() {
	return this.pieceType;
};

PlayerData.prototype.getDownwardDiagonalCount = function() {
	return this.downwardDiagonalPieces;
};

PlayerData.prototype.getUpwardDiagonalCount = function() {
	return this.upwardDiagonalPieces;
};

PlayerData.prototype.getColumnCounts = function() {
	return this.x;
};

PlayerData.prototype.getRowCounts = function() {
	return this.y;
};

PlayerData.prototype.incrementDownwardDiagonalCount = function() {
	this.downwardDiagonalPieces++;
};

PlayerData.prototype.incrementUpwardDiagonalCount = function() {
	this.upwardDiagonalPieces++;
};

PlayerData.prototype.incrementCountForColumn = function(x) {
	if (!(x in this.x)) {
		this.x[x] = 0;
	}
	this.x[x]++;
};

PlayerData.prototype.incrementCountForRow = function(y) {
	if (!(y in this.y)) {
		this.y[y] = 0;
	}
	this.y[y]++;
};


// export the class
module.exports = PlayerData;