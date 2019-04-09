// Initialize variable for 'Has the bot won a game yet?' which is no by default
var hasBotWon = false;

// Initialize array for cards the player has collected after winning a match, which is empty by default
var playerCollection = [];

// Initialize array for cards the bot has collected after winning a match, which is empty by default
var botCollection = [];

// Deal 5 cards to the player
var playerCards = [dealCards(), dealCards(), dealCards(), dealCards(), dealCards()];

// Deal 5 cards to the bot
var botCards = [dealCards(), dealCards(), dealCards(), dealCards(), dealCards()];

// Initialize variables for the id and other of the card chosen by the player, which is undefined by default
var playerCardId;
var playerElement;
var playerPower;

// Initialize variables for the id and other of the card chosen by the bot, which is undefined by default
var botCardId;
var botElement;
var botPower;
