import Deck from "./Deck.js";
import play from "./play.js";
import drawDot from "./dotMaker.js";
import flipCard from "./flip.js";

const playBtn = document.querySelector("#play-button");
const deck = new Deck();

deck.cut(Math.floor(Math.random() * 364) + 51);

deck.burn();

const games = [];
while (deck.hasCards) {
  games.push(play(deck));
}

console.log(games[0].playerHand);
console.log(games[0].bankerHand);
let gameCount = 0;

playBtn.addEventListener("click", async () => {
  await flipCard(games[gameCount]);
  finishGame();

  drawDot(games[gameCount]);

  bankRoll += calcWinning(games[gameCount]);
  clearBets();

  bankRollDisplay.textContent = bankRoll;

  gameCount++;
});

//this should all be in bets.js

function finishGame() {
  console.log("DONE");
}
