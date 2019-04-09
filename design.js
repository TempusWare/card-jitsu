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
  for (var i = 0; i < 5; i++) {
    // Create elements
    var cell = document.createElement("td");
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
    //cell.innerHTML = "ID: " + playerCards[i];
    //cell.id = "card" + (i + 1);
    cell.id = i;
    //card.onclick = function () {var choice = this.id; pickCard(choice)}
    //cell.onclick = function () {pickCard(i)};
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
  for (var i = 0; i < 5; i++) {
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
  var cell = document.createElement("td");
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
  var cell = document.createElement("td");
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
  createCollectionTable(document.getElementById("playerCollection"), playerCollection);
  createCollectionTable(document.getElementById("botCollection"), botCollection);
}

function createCollectionTable(table, array) {
  // Clear table
  while (table.firstChild) {
    table.removeChild(table.firstChild)
  };

  // Create table
  for (var i = 0; i < array.length; i++) {
    // Create elements
    var cell = document.createElement("td");
    var card = document.createElement("div");
    var frame = document.createElement("img");
    var element = document.createElement("img");
    // Assign classes for CSS
    frame.className = "frameIcon";
    element.className = "elementIcon";
    // Add unique things
    frame.src = "images/icon_" + cards[array[i]].colour + ".svg";
    element.src = "images/" + cards[array[i]].element + ".svg";
    // Append cards to table
    table.appendChild(cell);
    cell.appendChild(card);
    card.appendChild(frame);
    card.appendChild(element);
  };
}

function victory(winner) {
  setTimeout(function() {
    var reload = confirm("Winner: " + winner.toUpperCase() + "\n\nNew game?");
    if (reload == true) {location.reload()}}, 50);

}

// Display player's chosen card next to bot's chosen card

/*function displayCards(playerCard, botCard) {
  var playerBattle = document.getElementById("playerBattle");
  var botBattle = document.getElementById("botBattle");
  playerBattle.src = cards[playerCard].image;
  playerBattle.src = "images/" + cards[playerCard].colour + ".svg";
  botBattle.src = cards[botCard].image;
  botBattle.src = "images/" + cards[botCard].colour + ".svg";
};*/
