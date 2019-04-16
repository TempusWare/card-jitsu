// Function for dealing cards
function dealCards() {
  return Math.floor((Math.random() * Object.keys(cards).length) + 1)
};

// Function for picking a card
function pickCard(number) {
  // Get the ID of the card chosen by the player
  playerCardId = playerCards[number];
  // Use the bot card choosing algorithm to get a card for the bot to use in battle
  botCardId = botAl();
  // Judge the player's card against the bot's card
  judge();
  // Replace the cards used with new cards
  playerCards[number] = dealCards();
  botCards[number] = dealCards();
  // DISPLAY: Hide player's old card
  /*try {
    hideCard(number);
  } catch (e) {} finally {}*/
  // DISPLAY: Update table of cards
  try {
    updateTable(number);
  } catch (e) {} finally {};
};

// Algorithm for choosing a card for the bot
function botAl() {
  // PLACEHOLDER: return botCards[Math.floor(Math.random() * 5)];

  // If the bot has won a game, use the algorithm
  if (hasBotWon) {
    // Get elements from collection objects
    var elementsCollected = [];
    for (var i = 0; i < botCollection.length; i++) {
      elementsCollected.push(cards[botCollection[i]].element)
    };
    // Get elements from current deck
    var elementsAvailable = [];
    for (var i = 0; i < botCards.length; i++) {
      elementsAvailable.push(cards[botCards[i]].element)
    };
    // Check if the bot has not collected a fire card
    if (!elementsCollected.includes(elements[0])) {
      // Cycle through the bot's deck to find a fire card
      for (var i = 0; i < botCards.length; i++) {
        if (cards[botCards[i]].element == elements[0]) {
          return botCards[i];
          break;
        } else /* If no water card, return random card */ {
          return botCards[Math.floor(Math.random() * deckLength)];
        }
      }
    };
    // Check if the bot has not collected a snow card
    if (!elementsCollected.includes(elements[1])) {
      // Cycle through the bot's deck to find a snow card
      for (var i = 0; i < botCards.length; i++) {
        if (cards[botCards[i]].element == elements[1]) {
          return botCards[i];
          break;
        } else /* If no water card, return random card */ {
          return botCards[Math.floor(Math.random() * deckLength)];
        }
      }
    };
    // Check if the bot has not collected a water card
    if (!elementsCollected.includes(elements[2])) {
      // Cycle through the bot's deck to find a water card
      for (var i = 0; i < botCards.length; i++) {
        if (cards[botCards[i]].element == elements[2]) {
          return botCards[i];
          break;
        } else /* If no water card, return random card */ {
          return botCards[Math.floor(Math.random() * deckLength)];
        }
      }
    };
  } else {
    // If the bot has not won a game yet, randomly select a card
     return botCards[Math.floor(Math.random() * deckLength)];
  }
};

// Function for judging the player's card against the bot's card
function judge() {
  playerElement = cards[playerCardId].element;
  botElement = cards[botCardId].element;
  playerPower = cards[playerCardId].power;
  botPower = cards[botCardId].power;
  // Check if the player's element is fire
  if (playerElement === elements[0]) {
    // If the bot's element is snow
    if (botElement === elements[1]) {
      result("player", playerCardId)
      // If the bot's element is water
    } else if (botElement === elements[2]) {
      result("bot", botCardId)
      // If the player and the bot have the same element
    } else {
      // If the player's power is higher than the bot's
      if (playerPower > botPower) {
        result("player", playerCardId)
        // If the bot's power is higher than the player's
      } else if (playerPower < botPower) {
        result("bot", botCardId)
        // If the player's power and the bot's power is the same
      } else {
        result("tie")
      }
    }
  };

  // Check if the player's element is snow
  if (playerElement === elements[1]) {
    // If the bot's element is water
    if (botElement === elements[2]) {
      result("player", playerCardId)
      // If the bot's element is fire
    } else if (botElement === elements[0]) {
      result("bot", botCardId)
      // If the player and the bot have the same element
    } else {
      // If the player's power is higher than the bot's
      if (playerPower > botPower) {
        result("player", playerCardId)
        // If the bot's power is higher than the player's
      } else if (playerPower < botPower) {
        result("bot", botCardId)
        // If the player's power and the bot's power is the same
      } else {
        result("tie")
      }
    }
  };

  // Check if the player's element is water
  if (playerElement === elements[2]) {
    // If the bot's element is fire
    if (botElement === elements[0]) {
      result("player", playerCardId)
      // If the bot's element is snow
    } else if (botElement === elements[1]) {
      result("bot", botCardId)
      // If the player and the bot have the same element
    } else {
      // If the player's power is higher than the bot's
      if (playerPower > botPower) {
        result("player", playerCardId)
        // If the bot's power is higher than the player's
      } else if (playerPower < botPower) {
        result("bot", botCardId)
        // If the player's power and the bot's power is the same
      } else {
        result("tie")
      }
    }
  };

  // DISPLAY: Player's cards
  try {
    displayCards()
  } catch (e) {} finally {};
}

// Function for what to do with the result of judging (who won, or was it a tie?)
function result(winner) {
  // Update the player's collections
  if (winner === "player") {
    playerCollection.push(playerCardId);
    switch (cards[playerCardId].element) {
      case "fire":
        firePC = true;
        fireColoursPC.push(cards[playerCardId].colour);
        break;
      case "snow":
        snowPC = true;
        snowColoursPC.push(cards[playerCardId].colour);
        break;
      case "water":
        waterPC = true;
        waterColoursPC.push(cards[playerCardId].colour);
        break;
    };
  };

  // Update the bot's collections
  if (winner === "bot") {
    botCollection.push(botCardId);
    switch (cards[botCardId].element) {
      case "fire":
        fireBC = true;
        fireColoursBC.push(cards[botCardId].colour);
        break;
      case "snow":
        snowBC = true;
        snowColoursBC.push(cards[botCardId].colour);
        break;
      case "water":
        waterBC = true;
        waterColoursBC.push(cards[botCardId].colour);
        break;
    };
    //hasBotWon = true
  };

  // Check for a winner if the match wasn't a tie
  if (winner != "tie") {
    setTimeout(function() {checkforWinner(winner)}, 600);
  };

  // DISPLAY: Battle cards and Player's collection
  try {
    displayBattle(winner);
    displayCollections(winner);
  } catch (e) {} finally {};
}

// Check for a winner (run this after every win)
function checkforWinner(winner) {
  if (winner === "player") {
    // If the player has all 3 elements
    if (firePC && snowPC && waterPC) {
      // Check if a different colour can be found for each of the element collections
      loop1:
      for (var f = 0; f < fireColoursPC.length; f++) {
      loop2:
        for (var s = 0; s < snowColoursPC.length; s++) {
      loop3:
          for (var w = 0; w < waterColoursPC.length; w++) {
            if (fireColoursPC[f] != snowColoursPC[s] && fireColoursPC[f] != waterColoursPC[w] && waterColoursPC[w] != snowColoursPC[s]) {
              gameWon = true;
              // Save card details to an array
              winningCards.push(fireColoursPC[f], snowColoursPC[s], waterColoursPC[w]);
              gameWinner = "Player";
              break loop1;
            }
          }
        }
      };
    };

    // If the player has 3 or more of one element, all different colours
    if (fireColoursPC.length >= 3) {diffColours(fireColoursPC, "p", "fire")};
    if (snowColoursPC.length >= 3) {diffColours(snowColoursPC, "p", "snow")};
    if (waterColoursPC.length >= 3) {diffColours(waterColoursPC, "p", "water")};
  };

  if (winner === "bot") {
    // If the bot has all 3 elements
    if (fireBC && snowBC && waterBC) {
      // Check if a different colour can be found for each of the element collections
      loop1:
      for (var f = 0; f < fireColoursBC.length; f++) {
      loop2:
        for (var s = 0; s < snowColoursBC.length; s++) {
      loop3:
          for (var w = 0; w < waterColoursBC.length; w++) {
            if (fireColoursBC[f] != snowColoursBC[s] && fireColoursBC[f] != waterColoursBC[w] && waterColoursBC[w] != snowColoursBC[s]) {
              gameWon = true;
              // Save card details to an array
              winningCards.push(fireColoursBC[f], snowColoursBC[s], waterColoursBC[w]);
              gameWinner = "Bot";
              break loop1;
            }
          }
        }
      };
    };

    // If the player has 3 or more of one element, all different colours
    if (fireColoursBC.length >= 3) {diffColours(fireColoursBC, "b", "fire")};
    if (snowColoursBC.length >= 3) {diffColours(snowColoursBC, "b", "snow")};
    if (waterColoursBC.length >= 3) {diffColours(waterColoursBC, "b", "water")};
  };

  if (gameWon) {
    try {
      victory()
    } catch (e) {} finally {}
  };
}

// Check if an element collected has three different coloured cards
function diffColours(collection, checker, element) {
  // Cycle through to find three different colours
  loop1:
  for (var a = 0; a < collection.length; a++) {
  loop2:
    for (var b = 0; b < collection.length; b++) {
  loop3:
      for (var c = 0; c < collection.length; c++) {
        // If the collection can be arranged to find three different colours
        if (collection[a] != collection[b] && collection[a] != collection[c] && collection[c] != collection[b]) {
          gameWon = true;
          // Save card details to an array
          winningCards.push(collection[a], collection[b], collection[c], element);
          if (checker === "p") {gameWinner = "Player"};
          if (checker === "b") {gameWinner = "Bot"};
          break loop1;
        }
      }
    }
  }
}

/*function checkCollection(collection, winner) {

  // Cycle through the player/bot's collection
  for (var i = 0; i < collection.length; i++) {
   // Check for a fire card and add the colours
   if (cards[collection[i]].element === elements[0]) {fire = true; fireColours.push(cards[collection[i]].colour)};
   // Check for a snow card and add the colours
   if (cards[collection[i]].element === elements[1]) {snow = true; snowColours.push(cards[collection[i]].colour)};
   // Check for a water card and add the colours
   if (cards[collection[i]].element === elements[2]) {water = true; waterColours.push(cards[collection[i]].colour)};
 };
 // If the player/bot has every element
 if (fire && snow && water) {
   // Cycle through the player/bot's fire colours
   loop1:
   for (var f = 0; f < fireColours.length; f++) {
     // Cycle through the player/bot's snow colours
   loop2:
     for (var s = 0; s < snowColours.length; s++) {
       // Cycle through the player/bot's water colours
   loop3:
       for (var w = 0; w < waterColours.length; w++) {
         // If the player/bot's collection can be arranged to find a different colour for every element
         if (fireColours[f] != snowColours[s] && fireColours[f] != waterColours[w] && waterColours[w] != snowColours[s]) {
           gameWon = true;
           break loop1;
         }
       }
     }
   }
 };
 // Check if the player/bot has three or more fire cards collected and then look for three different coloured cards
 if (fireColours.length >= 3) {if (diffColours(fireColours)) {
   gameWon = true;
 }};
 // Check if the player/bot has three or more snow cards collected and then look for three different coloured cards
 if (snowColours.length >= 3) {if (diffColours(snowColours)) {
   gameWon = true;
 }};
 // Check if the player/bot has three or more water cards collected and then look for three different coloured cards
 if (waterColours.length >= 3) {if (diffColours(waterColours)) {
   gameWon = true;
 }};

 //
 if (gameWon) {
   // DISPLAY: Alert Winner
   try {
     victory(winner);
   } catch (e) {} finally {};
 }
};*/
