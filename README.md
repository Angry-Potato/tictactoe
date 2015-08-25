# TDDTic-Tac-Toe
A game of tic-tac-toe played between two murderous machines.

# To install
Checkout the repository using git. Navigate to the root directory, and run:
```sh
npm install
```

# To run tests
From the root directory, run:
```sh
npm test
```
  
# To run the game
From the root directory, run:
```sh
node modules/main.js
```
  
# Known issue(s)
Running on windows is sometimes problematic. If you encounter errors when running npm test or otherwise, try replacing the contents of package.json with the following:

{
  "name": "tddtictactoe",
  "version": "0.0.1",
  "description": "A game of tic-tac-toe being played by two machines making random moves, written using TDD.",
  "author": "Liam Humphreys <liam.humphreys.zim@gmail.com>",
  "contributors": [
    {
      "name": "Liam Humphreys",
      "email": "liam.humphreys.zim@gmail.com"
    }
  ],
  "bin": {
    "tictactoe": "./modules/main.js"
  },
  "scripts": {
    "lint": "jshint . --reporter=node_modules/jshint/src/reporters/default.js",
    "pretest": "npm run-script lint",
    "test": "istanbul cover node_modules/mocha/bin/_mocha -- --recursive -R nyan -r should -u tdd",
    "posttest": "istanbul check-coverage"
  },
  "main": "modules/main.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/Angry-Potato/tictactoe.git"
  },
  "jshintConfig": {
	"strict" : false,
	"node": true
  },
  "dependencies": {
    "istanbul": "0.3.2",
    "jshint": "2.5.6",
    "mocha": "1.21.5",
    "prompt": "^0.2.14",
    "should": "^7.0.2",
    "sinon": "^1.15.4"
  }
}
