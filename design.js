// Create the deck of cards
function deployTable() {
  // Find the deck div
  var deck = document.getElementById("deck");

  // Add all the cards from the player's deck array
  for (var i = 0; i < deckLength; i++) {
    // Create elements
    var card = document.createElement("div");
    var art = document.createElement("img");
    var frame = document.createElement("img");
    var element = document.createElement("img");
    var power = document.createElement("img");
    // Assign classes for CSS
    art.className = "art";
    art.id = playerCards[i];
    frame.className = "frame";
    element.className = "element";
    power.className = "power";
    card.id = "c" + i;

    //art.src = "images/cards/" + (i + 1) + ".svg";
    art.src = cards[playerCards[i]].image;
    frame.src = "images/" + cards[playerCards[i]].colour + ".svg";
    element.src = "images/" + cards[playerCards[i]].element + ".svg";
    power.src = "images/" + cards[playerCards[i]].power + ".png";
    // Append cards to table
    deck.appendChild(card);
    card.appendChild(art);
    card.appendChild(frame);
    card.appendChild(element);
    card.appendChild(power);
  };
  for (var i = 0; i < deckLength; i++) {
    document.getElementById("c" + i).onclick = function () {pickCard((this.id).substring(1))};
  }
};
deployTable();

// Display battle
// Get card divs
var player = document.getElementById("cardPlayer");
var bot = document.getElementById("cardBot");
function displayBattle(winner) {
  // Replace card attributes
  player.children[0].src = cards[playerCardId].image;
  player.children[1].src = "images/" + cards[playerCardId].colour + ".svg";
  player.children[2].src = "images/" + playerElement + ".svg";
  player.children[3].src = "images/" + playerPower + ".png";
  bot.children[0].src = cards[botCardId].image;
  if (winner != "player") {player.style.filter = "grayscale(100%)"} else {player.style.filter = "grayscale(0%)"};
  if (winner != "bot") {bot.style.filter = "grayscale(100%)"} else {bot.style.filter = "grayscale(0%)"};
  bot.children[1].src = "images/" + cards[botCardId].colour + ".svg";
  bot.children[2].src = "images/" + botElement + ".svg";
  bot.children[3].src = "images/" + botPower + ".png";
}


// Update the deck of cards
function updateTable(number) {
  // Find the card's cell div
  var card = document.getElementById("c" + number);
  // Hide card temporarily
  card.style.opacity = "0";
  //card.style.transform = "scale(0)";
  // Empty div
  while (card.firstChild) {
    card.removeChild(card.firstChild)
  };
  // Create elements
  var art = document.createElement("img");
  var frame = document.createElement("img");
  var element = document.createElement("img");
  var power = document.createElement("img");
  // Assign classes for CSS
  art.className = "art";
  art.id = playerCards[number];
  frame.className = "frame";
  element.className = "element";
  power.className = "power";
  //art.src = "images/card.svg";
  setTimeout(function() {
    //art.src = "images/cards/" + playerCards[number] + ".svg";

    // Reveal card after hiding
    card.style.opacity = "1";
    //card.style.transform = "scale(.9)";

    // Replace attributes
    art.src = cards[playerCards[number]].image;
    frame.src = "images/" + cards[playerCards[number]].colour + ".svg";
    element.src = "images/" + cards[playerCards[number]].element + ".svg";
    power.src = "images/" + cards[playerCards[number]].power + ".png";
  }, 500);

  // Append new things to card
  card.appendChild(art);
  card.appendChild(frame);
  card.appendChild(element);
  card.appendChild(power);
};

// Display collections
// Player Collection Divs
var colPlayerFire = document.getElementById("colPlayerFire");
var colPlayerSnow = document.getElementById("colPlayerSnow");
var colPlayerWater = document.getElementById("colPlayerWater");
var colBotFire = document.getElementById("colBotFire");
var colBotSnow = document.getElementById("colBotSnow");
var colBotWater = document.getElementById("colBotWater");
function displayCollections(winner) {
  // Create elements
  var card = document.createElement("div");
  card.className = "icon";
  var frame = document.createElement("img");
  var element = document.createElement("img");
  frame.className = "frameIcon";
  element.className = "elementIcon";

  // Update player collection
  if (winner === "player") {
    frame.src = "images/icon_" + cards[playerCardId].colour + ".svg";
    element.src = "images/" + cards[playerCardId].element + ".svg";
    // If the card collected is a fire card
    if (cards[playerCardId].element == elements[0]) {colPlayerFire.appendChild(card)};
    // If the card collected is a snow card
    if (cards[playerCardId].element == elements[1]) {colPlayerSnow.appendChild(card)};
    // If the card collected is a water card
    if (cards[playerCardId].element == elements[2]) {colPlayerWater.appendChild(card)};

    // Add frame and element to card
    card.appendChild(frame);
    card.appendChild(element);
  };

  // Update bot collection
  if (winner === "bot") {
    frame.src = "images/icon_" + cards[botCardId].colour + ".svg";
    element.src = "images/" + cards[botCardId].element + ".svg";
    // If the card collected is a fire card
    if (cards[botCardId].element == elements[0]) {colBotFire.appendChild(card)};
    // If the card collected is a snow card
    if (cards[botCardId].element == elements[1]) {colBotSnow.appendChild(card)};
    // If the card collected is a water card
    if (cards[botCardId].element == elements[2]) {colBotWater.appendChild(card)};

    // Add frame and element to card
    card.appendChild(frame);
    card.appendChild(element);
  };
  /*for (var i = 0; i < collection.length; i++) {
    // Create elements
    var card = document.createElement("div");
    card.className = "collectedCard";
    var frame = document.createElement("img");
    var element = document.createElement("img");
    // Assign classes for CSS
    frame.className = "frameIcon";
    element.className = "elementIcon";
    if (cards[collection[i]].element == elements[0]) {
      frame.src = "images/icon_" + cards[collection[i]].colour + ".svg";
      element.src = "images/" + cards[collection[i]].element + ".svg";
      // Append cards to table
      colFire.appendChild(card);
      card.appendChild(frame);
      card.appendChild(element);
    };
    if (cards[collection[i]].element == elements[1]) {
      frame.src = "images/icon_" + cards[collection[i]].colour + ".svg";
      element.src = "images/" + cards[collection[i]].element + ".svg";
      // Append cards to table
      colSnow.appendChild(card);
      card.appendChild(frame);
      card.appendChild(element);
    };
    if (cards[collection[i]].element == elements[2]) {
      frame.src = "images/icon_" + cards[collection[i]].colour + ".svg";
      element.src = "images/" + cards[collection[i]].element + ".svg";
      // Append cards to table
      colWater.appendChild(card);
      card.appendChild(frame);
      card.appendChild(element);
    };
  }*/
};

function victory() {
  // Set winning cards details
  // If the game was won by collecting 3 elements
  if (winningCards.length === 3) {
    //var display = document.getElementById("winningCards");
    for (var i = 0; i < 3; i++) {
      card = document.getElementById("wc" + i);
      card.children[0].src = "images/icon_" + winningCards[i] + ".svg";
      card.children[1].src = "images/" + elements[i] + ".svg";
    };
    document.getElementById("winningCards").style.display = "block";
  };

  if (winningCards.length === 4) {
    for (var i = 0; i < 3; i++) {
      card = document.getElementById("wc" + i);
      card.children[0].src = "images/icon_" + winningCards[i] + ".svg";
      card.children[1].src = "images/" + winningCards[3] + ".svg";
    };
    document.getElementById("winningCards").style.display = "block";
  };

  // Announce winner through text
  document.getElementById("winTextA").innerHTML = gameWinner + " Wins"

  // Delay onclick new game button
  setTimeout(function() {
    document.getElementById("winText").onclick = function () {location.reload()};
    document.getElementById("winTextB").style.opacity = "1"
  }, 1000)
  //setTimeout(function() {alert(gameWinner + " won.\n")}, 500);
  //setTimeout(function() {alert(winner.toUpperCase() + " won through " + winWay + ".")}, 500);
  /*var winnerText = document.getElementById("gameEnd");
  var seconds = document.getElementById("newGame");
  winnerText.style.display = "block";
  winnerText.children[0].innerHTML = "WINNER: " + winner.toUpperCase();
    //winnerText.children[0].style.display = "block"
  setTimeout(function() {seconds.innerHTML = "New game in 2..."}, 1000);
  setTimeout(function() {seconds.innerHTML = "New game in 1..."}, 2000);
  setTimeout(function() {seconds.innerHTML = "New game in 0..."; location.reload()}, 3000)*/
}


/*// Hide player's card after it's used
function hideCard(number) {
  var card = document.getElementById(number);
  card.style.visibility = "hidden";
};
function displayBattle(winner) {
  // Clear table
  var table = document.getElementById("battle");
  while (table.firstChild) {
    table.removeChild(table.firstChild)
  };
  // Player's card
  var cell = document.createElement("div");
  var card = document.createElement("div");
  var art = document.createElement("img");
  var frame = document.createElement("img");
  var element = document.createElement("img");
  var power = document.createElement("img");
  // Assign classes for CSS
  art.className = "art";
  frame.className = "frame";
  element.className = "element";
  power.className = "power";
  // Add unique things
  //cell.innerHTML = "ID: " + playerCardId;
  //cell.onclick = function () {pickCard(i)};
  try {
    art.src = cards[playerCardId].image;
    frame.src = "images/" + cards[playerCardId].colour + ".svg";
    element.src = "images/" + playerElement + ".svg";
    power.src = "images/" + playerPower + ".png";
    // Add shadow if winner is not the player
    if (winner != "player") {
      card.id = "lost";
    };
  } catch (e) {
    frame.src = "images/card.svg";
  } finally {}
  // Append cards to table
  table.appendChild(cell);
  cell.appendChild(card);
  card.appendChild(art);
  card.appendChild(frame);
  card.appendChild(element);
  card.appendChild(power);

  // Bot's card
  var cell = document.createElement("div");
  var card = document.createElement("div");
  var art = document.createElement("img");
  var frame = document.createElement("img");
  var element = document.createElement("img");
  var power = document.createElement("img");
  // Assign classes for CSS
  art.className = "art";
  frame.className = "frame";
  element.className = "element";
  power.className = "power";
  // Add unique things
  //cell.innerHTML = "ID: " + botCardId;
  //cell.onclick = function () {pickCard(i)};
  try {
    art.src = cards[botCardId].image;
    frame.src = "images/" + cards[botCardId].colour + ".svg";
    element.src = "images/" + botElement + ".svg";
    power.src = "images/" + botPower + ".png";
    // Add shadow if bot is not the player
    if (winner != "bot") {
      card.id = "lost";
    };
  } catch (e) {
    frame.src = "images/card.svg";
  } finally {};
  // Append cards to table
  table.appendChild(cell);
  cell.appendChild(card);
  card.appendChild(art);
  card.appendChild(frame);
  card.appendChild(element);
  card.appendChild(power);
  // Display winner text
  var winnerText = document.getElementById("winner");
  switch (winner) {
    case "player":
      winnerText.innerHTML = "Player wins - " + playerElement.toUpperCase() + " beats " + botElement.toUpperCase();
      break;
    case "bot":
      winnerText.innerHTML = "Bot won - " + botElement.toUpperCase() + " beats " + playerElement.toUpperCase();
      break;
    case "tie":
      winnerText.innerHTML = "Tie";
      break;
    default:
      winnerText.innerHTML = ""
  };
}
//displayBattle();

// Display collections
function displayCollections() {
  createColtable(playerCollection, "p");
  createColtable(botCollection, "b");
};
function createColtable(collection, prefix) {
  var colFire = document.getElementById(prefix + "colFire");
  var colSnow = document.getElementById(prefix + "colSnow");
  var colWater = document.getElementById(prefix + "colWater");

  // Clear tables
  while (colFire.firstChild) {
    colFire.removeChild(colFire.firstChild)
  };
  while (colSnow.firstChild) {
    colSnow.removeChild(colSnow.firstChild)
  };
  while (colWater.firstChild) {
    colWater.removeChild(colWater.firstChild)
  };

  for (var i = 0; i < collection.length; i++) {
    // Create elements
    var card = document.createElement("div");
    card.className = "collectedCard";
    var frame = document.createElement("img");
    var element = document.createElement("img");
    // Assign classes for CSS
    frame.className = "frameIcon";
    element.className = "elementIcon";
    if (cards[collection[i]].element == elements[0]) {
      frame.src = "images/icon_" + cards[collection[i]].colour + ".svg";
      element.src = "images/" + cards[collection[i]].element + ".svg";
      // Append cards to table
      colFire.appendChild(card);
      card.appendChild(frame);
      card.appendChild(element);
    };
    if (cards[collection[i]].element == elements[1]) {
      frame.src = "images/icon_" + cards[collection[i]].colour + ".svg";
      element.src = "images/" + cards[collection[i]].element + ".svg";
      // Append cards to table
      colSnow.appendChild(card);
      card.appendChild(frame);
      card.appendChild(element);
    };
    if (cards[collection[i]].element == elements[2]) {
      frame.src = "images/icon_" + cards[collection[i]].colour + ".svg";
      element.src = "images/" + cards[collection[i]].element + ".svg";
      // Append cards to table
      colWater.appendChild(card);
      card.appendChild(frame);
      card.appendChild(element);
    };
  }
}
function victory(winner) {
  var winnerText = document.getElementById("gameEnd");
  var seconds = document.getElementById("newGame");
  winnerText.style.display = "block";
  winnerText.children[0].innerHTML = "WINNER: " + winner.toUpperCase();
    //winnerText.children[0].style.display = "block"
  setTimeout(function() {seconds.innerHTML = "New game in 2..."}, 1000);
  setTimeout(function() {seconds.innerHTML = "New game in 1..."}, 2000);
  setTimeout(function() {seconds.innerHTML = "New game in 0..."; location.reload()}, 3000)
}*/
