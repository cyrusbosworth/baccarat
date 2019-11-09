import Deck from "./Deck.js";
import play from "./play.js";
import drawDot from "./dotMaker.js";

const flipBtn = document.querySelector("#flip");
const fcard = document.querySelector(".card_content");

const pc1 = document.querySelector("#pc1 img");
const pc2 = document.querySelector("#pc2 img");
const pc3 = document.querySelector("#pc3 img");

const bc1 = document.querySelector("#bc1 img");
const bc2 = document.querySelector("#bc2 img");
const bc3 = document.querySelector("#bc3 img");
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

flipBtn.addEventListener("click", () => {
  fcard.style.transform = "rotateY(0.5turn)";
});

playBtn.addEventListener("click", () => {
  pc1.src = games[gameCount].playerHand[0].path;
  pc2.src = games[gameCount].playerHand[1].path;

  if (games[gameCount].playerHand[2]) {
    pc3.src = games[gameCount].playerHand[2].path;
  } else {
    pc3.src = "";
  }

  bc1.src = games[gameCount].bankerHand[0].path;
  bc2.src = games[gameCount].bankerHand[1].path;

  if (games[gameCount].bankerHand[2]) {
    bc3.src = games[gameCount].bankerHand[2].path;
  } else {
    bc3.src = "";
  }
  drawDot(games[gameCount]);
  console.log(games[gameCount]);
  console.log(games[gameCount].playerHand);
  console.log(games[gameCount].bankerHand);
  gameCount++;
});
