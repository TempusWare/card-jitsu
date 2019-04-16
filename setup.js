// Initialize variable for 'Has the bot won a game yet?' which is no by default
var hasBotWon;

// Initialize array for cards the player has collected after winning a match, which is empty by default
var playerCollection = [];

// Initialize array for cards the bot has collected after winning a match, which is empty by default
var botCollection = [];

// Deal cards to each deck
var playerCards = [];
var botCards = [];
var deckLength = 5;
for (var i = 0; i < deckLength; i++) {
  playerCards.push(dealCards());
  botCards.push(dealCards());
};

// Initialize variables for the id and other of the card chosen by the player, which is undefined by default
var playerCardId;
var playerElement;
var playerPower;

// Initialize variables for the id and other of the card chosen by the bot, which is undefined by default
var botCardId;
var botElement;
var botPower;

// Initalize variable for 'Has anyone won?'
var gameWon;

// Initialize variable for the way the match was won (Elemental or One element win)
var winWay;

// Define variables and arrays
var firePC; var snowPC; var waterPC; var fireBC; var snowBC; var waterBC;
var fireColoursPC = []; var snowColoursPC = []; var waterColoursPC = [];
var fireColoursBC = []; var snowColoursBC = []; var waterColoursBC = [];

// Initialize variable for the final winner of the game
var gameWinner;

// Initialize array for winning cards
var winningCards = [];
