// Create the table of cards
function updateTable() {
  /*var botDeck = document.getElementById("botCards");
  botDeck.innerHTML = " ";
  for (var i = 0; i < botCards.length; i++) {
    botDeck.innerHTML += cards[botCards[i]].element + " "
  };*/
  // Clear table
  var table = document.getElementById("cardsDealt");
  while (table.firstChild) {
    table.removeChild(table.firstChild)
  };
  for (var i = 0; i < deckLength; i++) {
    // Create elements
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
    cell.id = i;
    art.src = cards[playerCards[i]].image;
    frame.src = "images/" + cards[playerCards[i]].colour + ".svg";
    element.src = "images/" + cards[playerCards[i]].element + ".svg";
    power.src = "images/" + cards[playerCards[i]].power + ".png";
    // Append cards to table
    table.appendChild(cell);
    cell.appendChild(card);
    card.appendChild(art);
    card.appendChild(frame);
    card.appendChild(element);
    card.appendChild(power);
  };
  for (var i = 0; i < deckLength; i++) {
    document.getElementById(i).onclick = function () {pickCard(this.id)};
  }
};
updateTable();

// Display battle
function displayBattle(winner) {
  // Clear table
  var table = document.getElementById("battleCards");
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
  //setTimeout(function() {alert(winnerText.innerHTML)}, 50);
  //setTimeout(function() {alert("Winner: " + winner)}, 250);


  // Add shadow behind battle cards display
  /*document.getElementById("shadow").style.display = "inline";
  //setTimeout(function() {document.getElementById("shadow").style.display = "inline";}, 25);

  // Remove shadow and battle cards on click
  document.getElementById("battle").addEventListener("click", function () {
    document.getElementById("shadow").style.display = "none";
    while (table.firstChild) {
      table.removeChild(table.firstChild)
    };
  });*/
}

displayBattle();

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
}
