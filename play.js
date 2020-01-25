let game = {};
export default function play(deck) {
  game = {
    playerHand: [],
    bankerHand: [],
    playerScore: 0,
    bankerScore: 0,
    isNatural: false,
    isForty: false,
    winner: null,
    bonus: 0,
    cards: 0
  };

  startDeal(deck);
  scoreHands();
  //If natural
  if (game.playerScore >= 8 || game.bankerScore >= 8) {
    game.isNatural = true;
    game.bonus = 1;
  } else {
    drawCards(deck);
    scoreHands();
    determineBonus();
    determineForty();
  }

  determineWinner();
  game.cards = game.playerHand.length + game.bankerHand.length;
  return game;
}

function startDeal(deck) {
  game.playerHand.push(deck.deal());
  game.bankerHand.push(deck.deal());
  game.playerHand.push(deck.deal());
  game.bankerHand.push(deck.deal());
}

function drawCards(deck) {
  //Player stands on 6 and up
  if (game.playerScore >= 6) {
    //If player stands banker draws on five and lower
    if (game.bankerScore <= 5) {
      game.bankerHand.push(deck.deal());
    }
    //Player has less than 6 and hits
  } else {
    game.playerHand.push(deck.deal());
    const thirdCard = game.playerHand[2].value;
    //banker draws on 2 and below no matter what player drew
    if (game.bankerScore <= 2) {
      game.bankerHand.push(deck.deal());
    }
    //bankers score and players third card draw rules
    if (game.bankerScore === 3 && thirdCard !== 8) {
      game.bankerHand.push(deck.deal());
    }
    if (game.bankerScore === 4 && thirdCard >= 2 && thirdCard <= 7) {
      game.bankerHand.push(deck.deal());
    }
    if (game.bankerScore === 5 && thirdCard >= 4 && thirdCard <= 7) {
      game.bankerHand.push(deck.deal());
    }
    if (game.bankerScore === 6 && thirdCard >= 6 && thirdCard <= 7) {
      game.bankerHand.push(deck.deal());
    }
  }
}

function score(hand) {
  const total = hand.reduce((a, b) => a + b.value, 0);
  return total % 10;
}

function scoreHands() {
  game.playerScore = score(game.playerHand);
  game.bankerScore = score(game.bankerHand);
}

function determineWinner() {
  if (game.playerScore === game.bankerScore) {
    game.winner = "tie";
  } else {
    game.winner = game.playerScore > game.bankerScore ? "player" : "banker";
  }
}

function determineForty() {
  if (game.bankerHand.length === 3 && game.bankerScore === 7 && game.playerScore < 7) {
    game.isForty = true;
  }
}

function determineBonus() {
  const bonuses = [0, 0, 0, 0, 1, 2, 4, 6, 10, 30];
  game.bonus = bonuses[Math.abs(game.playerScore - game.bankerScore)];
}
