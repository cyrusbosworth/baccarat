import Deck from "./Deck.js";
import play from "./play.js";

const playerCard1 = document.querySelector(".player .first-card");
const playerCard2 = document.querySelector(".player .second-card");
const playerCard3 = document.querySelector(".player .third-card");

const bankerCard1 = document.querySelector(".banker .first-card");
const bankerCard2 = document.querySelector(".banker .second-card");
const bankerCard3 = document.querySelector(".banker .third-card");

const dealBtn = document.querySelector("#deal");
const allCards = [playerCard1, playerCard2, playerCard3, bankerCard1, bankerCard2, bankerCard3];
const deck = new Deck();
deck.cut(200);
deck.burn();
const games = [];
while (deck.hasCards) {
  games.push(play(deck));
}

var cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
});

dealBtn.addEventListener("click", () => {
  console.log("click");
  reset();
});

function reset() {
  allCards.forEach(card => {
    card.classList.toggle("is-flipped");
    card.style.opacity = "1";
  });
}
