import Deck from "./Deck.js";
import play from "./play.js";
//TODO card out sweep animation
const TIME = 750;
const playerCard1 = document.querySelector(".player .first-card");
const playerCard2 = document.querySelector(".player .second-card");
const playerCard3 = document.querySelector(".player .third-card");

const bankerCard1 = document.querySelector(".banker .first-card");
const bankerCard2 = document.querySelector(".banker .second-card");
const bankerCard3 = document.querySelector(".banker .third-card");

const timers = [3000, 5500, 8000];

const allCards = [playerCard1, playerCard2, bankerCard1, bankerCard2, playerCard3, bankerCard3];

export default function flipCards(game) {
  clear();
  setCards(game);

  setTimeout(() => {
    playerCard1.classList.add("card-in");
    playerCard2.classList.add("card-in");
  }, 250);

  setTimeout(() => {
    bankerCard1.classList.add("card-in");
    bankerCard2.classList.add("card-in");
  }, 3000);

  if (game.playerHand[2]) {
    setTimeout(() => {
      playerCard3.classList.add("card-in");
    }, 5500);
    if (game.bankerHand[2]) {
      setTimeout(() => {
        bankerCard3.classList.add("card-in");
      }, 8000);
    }
  } else if (game.bankerHand[2]) {
    setTimeout(() => {
      bankerCard3.classList.add("card-in");
    }, 5500);
  }
}

//cards on not clearing correct on FF
//TODO no card transitions on EDGE

function clear() {
  allCards.forEach(card => {
    card.classList.remove("card-in");
  });
}

function setCards(game) {
  playerCard1.firstElementChild.style.backgroundImage = `url(${game.playerHand[0].path})`;
  playerCard2.firstElementChild.style.backgroundImage = `url(${game.playerHand[1].path})`;

  bankerCard1.firstElementChild.style.backgroundImage = `url(${game.bankerHand[0].path})`;
  bankerCard2.firstElementChild.style.backgroundImage = `url(${game.bankerHand[1].path})`;

  if (game.playerHand[2]) {
    playerCard3.firstElementChild.style.backgroundImage = `url(${game.playerHand[2].path})`;
  }

  if (game.bankerHand[2]) {
    bankerCard3.firstElementChild.style.backgroundImage = `url(${game.bankerHand[2].path})`;
  }
}
