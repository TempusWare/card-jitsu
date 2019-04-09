// Array of Elements
const elements = ["fire", "snow", "water"];

// Array of Colours
const colours = ["blue", "green", "orange", "purple", "red", "yellow"];

// Card Objects
const cards = {
  1: {
    element: elements[0],
    power: 3,
    colour: colours[0],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/0/0b/CART_SURFER_card_image.png/revision/latest?cb=20150121025008",
  },
  2: {
    element: elements[0],
    power: 2,
    colour: colours[1],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/b/b2/COFFEE_SHOP_card_image.png/revision/latest?cb=20150123213646",
  },
  3: {
    element: elements[0],
    power: 8,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/2/22/ASTRO_BARRIER_card_image.png/revision/latest?cb=20150123213647"
  },
  4: {
    element: elements[0],
    power: 3,
    colour: colours[2],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/3/3d/HOT_CHOCOLATE_card_image.png/revision/latest?cb=20150123213647",
  },
  5: {
    element: elements[0],
    power: 4,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/d/d2/LANDING_PAD_card_image.png/revision/latest?cb=20150123213647",
  },
  6: {
    element: elements[0],
    power: 6,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/5/57/PIZZA_CHEF_card_image.png/revision/latest?cb=20150123213648",
  },
  7: {
    element: elements[0],
    power: 2,
    colour: colours[4],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/b/b5/PAINT_BY_LETTERS_card_image.png/revision/latest?cb=20150806164936",
  },
  8: {
    element: elements[0],
    power: 7,
    colour: colours[4],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/3/30/MINE_card_image.png/revision/latest?cb=20150123213648",
  },
  9: {
    element: elements[0],
    power: 2,
    colour: colours[5],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/a/a5/CONSTRUCTION_WORKER_card_image.png/revision/latest?cb=20150123220534",
  },
  10: {
    element: elements[0],
    power: 5,
    colour: colours[5],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/1/13/JET_PACK_ADVENTURE_card_image.png/revision/latest?cb=20150123220536",
  },
  11: {
    element: elements[1],
    power: 3,
    colour: colours[0],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/f/f2/GIFT_SHOP_card_image.png/revision/latest?cb=20150123220535",
  },
  12: {
    element: elements[1],
    power: 2,
    colour: colours[1],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/7/72/HIKING_IN_THE_FOREST_card_image.png/revision/latest?cb=20150123220536",
  },
  13: {
    element: elements[1],
    power: 5,
    colour: colours[1],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/a/a6/RESCUE_SQUAD_card_image.png/revision/latest?cb=20150123220537",
  },
  14: {
    element: elements[1],
    power: 3,
    colour: colours[2],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/b/b3/PET_SHOP_card_image.png/revision/latest?cb=20150123220538",
  },
  15: {
    element: elements[1],
    power: 4,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/c/c3/SKI_VILLAGE_card_image.png/revision/latest?cb=20150806165004",
  },
  16: {
    element: elements[1],
    power: 8,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/f/f4/ICE_HOCKEY_card_image.png/revision/latest?cb=20150123224012",
  },
  17: {
    element: elements[1],
    power: 2,
    colour: colours[4],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/c/c1/SKI_HILL_card_image.png/revision/latest?cb=20150123224012",
  },
  18: {
    element: elements[1],
    power: 6,
    colour: colours[4],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/f/f5/SNOWBALL_FIGHT_card_image.png/revision/latest?cb=20150123224013",
  },
  19: {
    element: elements[1],
    power: 2,
    colour: colours[5],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/1/13/SNOW_FORTS_card_image.png/revision/latest?cb=20150123224013",
  },
  20: {
    element: elements[1],
    power: 7,
    colour: colours[5],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/9/97/SOCCER_card_image.png/revision/latest?cb=20150123224014",
  },
  21: {
    element: elements[2],
    power: 3,
    colour: colours[0],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/7/77/BEACH_card_image.png/revision/latest?cb=20150123224014",
  },
  22: {
    element: elements[2],
    power: 5,
    colour: colours[0],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/1/1a/FOOTBALL_card_image.png/revision/latest?cb=20150123224014",
  },
  23: {
    element: elements[2],
    power: 2,
    colour: colours[1],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/f/f0/BASEBALL_card_image.png/revision/latest?cb=20150123224015",
  },
  24: {
    element: elements[2],
    power: 8,
    colour: colours[1],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/5/52/EMERALD_PRINCESS_card_image.png/revision/latest?cb=20150123224015",
  },
  25: {
    element: elements[2],
    power: 3,
    colour: colours[2],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/6/6b/BEAN_COUNTERS_card_image.png/revision/latest?cb=20150123224016",
  },
  26: {
    element: elements[2],
    power: 4,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/e/e8/MANHOLE_COVER_card_image.png/revision/latest?cb=20150123224059",
  },
  27: {
    element: elements[2],
    power: 6,
    colour: colours[3],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/2/2a/NEWSPAPER_ARCHIVES_card_image.png/revision/latest?cb=20150123234950",
  },
  28: {
    element: elements[2],
    power: 2,
    colour: colours[4],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/a/aa/UNDERGROUND_POOL_card_image.png/revision/latest?cb=20150123234951",
  },
  29: {
    element: elements[2],
    power: 7,
    colour: colours[4],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/7/7b/SCUBA_DIVING_card_image.png/revision/latest?cb=20150123234951",
  },
  30: {
    element: elements[2],
    power: 2,
    colour: colours[5],
    image: "https://vignette.wikia.nocookie.net/clubpenguin/images/2/21/ICE_FISHING_card_image.png/revision/latest?cb=20150123234951",
  },
};

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

  // DISPLAY: Update table of cards
  try {
    //setTimeout(function() {updateTable()}, 1000);
    updateTable();
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
          return botCards[Math.floor(Math.random() * 5)];
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
          return botCards[Math.floor(Math.random() * 5)];
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
          return botCards[Math.floor(Math.random() * 5)];
        }
      }
    };
  } else {
    // If the bot has not won a game yet, randomly select a card
     return botCards[Math.floor(Math.random() * 5)];
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
function result(winner, cardId) {
  // If the player won
  if (winner === "player") {
    playerCollection.push(cardId);
    checkforWinner(winner);
  };

  // If the bot won
  if (winner === "bot") {
    botCollection.push(cardId);
    checkforWinner(winner);
  };

  // If it was a tie
  if (winner === "tie") {
  };

  // DISPLAY: Battle cards and Player's collection
  try {
    displayBattle(winner);
    displayCollections();
  } catch (e) {} finally {};
}

// Check for a winner (run this after every win)
function checkforWinner(winner) {
  if (winner === "player") {checkCollection(playerCollection, winner)};
  if (winner === "bot") {checkCollection(botCollection, winner)};
}

function checkCollection(collection, winner) {
  // Define variables and arrays
  var fire; var snow; var water;
  var fireColours = []; var snowColours = []; var waterColours = [];
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
            // DISPLAY: Alert Winner
            try {
              victory(winner);
            } catch (e) {} finally {};
            break loop1;
          }
        }
      }
    }
  };
  // Check if the player/bot has three or more fire cards collected and then look for three different coloured cards
  if (fireColours.length >= 3) {if (diffColours(fireColours)) {
    // DISPLAY: Alert Winner
    try {
      victory(winner);
    } catch (e) {} finally {};
  }};
  // Check if the player/bot has three or more snow cards collected and then look for three different coloured cards
  if (snowColours.length >= 3) {if (diffColours(snowColours)) {
    // DISPLAY: Alert Winner
    try {
      victory(winner);
    } catch (e) {} finally {};
  }};
  // Check if the player/bot has three or more water cards collected and then look for three different coloured cards
  if (waterColours.length >= 3) {if (diffColours(waterColours)) {
    // DISPLAY: Alert Winner
    try {
      victory(winner);
    } catch (e) {} finally {};
  }};
};

// Check if an element collected has three different coloured cards
function diffColours(element) {
  // Cycle through to find three different colours
  loop1:
  for (var a = 0; a < element.length; a++) {
  loop2:
    for (var b = 0; b < element.length; b++) {
  loop3:
      for (var c = 0; c < element.length; c++) {
        // If the collection of fire cards can be arranged to find three different colours
        if (element[a] != element[b] && element[a] != element[c] && element[c] != element[b]) {
          return true;
          break loop1;
        }
      }
    }
  }
}
