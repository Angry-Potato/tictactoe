var TicTacToe = require('./tictactoe.js');
var prompt = require('prompt');

/*
 * Main entry point
 */
var openingSchema = {
  properties: {
    continue: {
      description: 'Start game? (Y/N)',
      type: 'string',
      pattern: /^[yYnN]$/,
      default: 'Y',
      required: false
    }
  }
};
var againSchema = {
  properties: {
    continue: {
      description: 'Go through all that again? (Y/N)',
      type: 'string',
      pattern: /^[yYnN]$/,
      default: 'Y',
      required: false
    }
  }
};
prompt.start();

prompt.get(openingSchema, function(err, result) {
  if (err) {
    return onErr(err);
  }
  if (result.continue.toLowerCase() !== "n") {
    var ticTacToeGame = new TicTacToe();
    ticTacToeGame.play(again);
  } else {
    console.log("Goodbye!");
  }
});

function again() {
  prompt.get(againSchema, function(err, result) {
    if (err) {
      return onErr(err);
    }
    if (result.continue.toLowerCase() !== "n") {
      var ticTacToeGame = new TicTacToe();
      ticTacToeGame.play(again);
    } else {
      console.log("Goodbye!");
    }
  });
}

function onErr(err) {
  console.log(err);
    return 1;
}