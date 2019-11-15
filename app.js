import Deck from "./Deck.js";
import play from "./play.js";
import drawDot from "./dotMaker.js";
import flipCard from "./flip.js";

const flipBtn = document.querySelector("#flip");

const playBtn = document.querySelector("#play");
const deck = new Deck();

const board = document.querySelector("#board");

console.log("connected");

//console.table(deck.cards);

deck.cut(200);

deck.burn();

const games = [];
while (deck.hasCards) {
  games.push(play(deck));
}
// games.forEach(function(game) {
//   drawDot(game);
// });
console.log(games[0].playerHand);
console.log(games[0].bankerHand);
let gameCount = 0;

playBtn.addEventListener("click", () => {
  flipCard(games[gameCount]);
  drawDot(games[gameCount]);
  console.log(games[gameCount]);
  console.log(games[gameCount].playerHand);
  console.log(games[gameCount].bankerHand);
  gameCount++;
});
