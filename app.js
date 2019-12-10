import Deck from "./Deck.js";
import play from "./play.js";
import drawDot from "./dotMaker.js";
import flipCard from "./flip.js";
const timers = [5000, 7500, 9500];

const playBtn = document.querySelector("#play");
const deck = new Deck();

deck.cut(200);

deck.burn();

const games = [];
while (deck.hasCards) {
  games.push(play(deck));
}

console.log(games[0].playerHand);
console.log(games[0].bankerHand);
let gameCount = 0;

playBtn.addEventListener("click", () => {
  flipCard(games[gameCount]);

  finishGame();
  drawDot(games[gameCount]);
  console.log(games[gameCount]);
  console.log(games[gameCount].playerHand);
  console.log(games[gameCount].bankerHand);
  console.log(games[gameCount].cards);

  bankRoll += calcWinning(games[gameCount]);
  clearBets();

  setTimeout(() => {
    bankRollDisplay.textContent = bankRoll;
    console.log("updating display win");
  }, timers[games[gameCount].cards - 4]);
  gameCount++;
});

//fix timer for when bankroll changes on win
//this should all be in bets.js

function finishGame() {}
