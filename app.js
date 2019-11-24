import Deck from "./Deck.js";
import play from "./play.js";
import drawDot from "./dotMaker.js";
import flipCard from "./flip.js";

const playBtn = document.querySelector("#play");
const deck = new Deck();
let bankRoll = 1000;

const betInputs = {
  player: document.querySelectorAll("input")[1],
  banker: document.querySelectorAll("input")[3],
  playerBonus: document.querySelectorAll("input")[2],
  bankerBonus: document.querySelectorAll("input")[4],
  tie: document.querySelectorAll("input")[0]
};

const bets = {
  player: 0,
  banker: 0,
  playerBonus: 0,
  bankerBonus: 0,
  tie: 0
}

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
  drawDot(games[gameCount]);
  console.log(games[gameCount]);
  console.log(games[gameCount].playerHand);
  console.log(games[gameCount].bankerHand);
  console.log(games[gameCount].cards);
  gameCount++;
});

let bankrollTxt = document.querySelector("#bankroll");

function changeBet() {
  bets[] = this.value

}


