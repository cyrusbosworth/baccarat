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

const dealBtn = document.querySelector("#deal");

const allCards = [playerCard1, playerCard2, bankerCard1, bankerCard2, playerCard3, bankerCard3];
const deck = new Deck();
let gameCount = 0;
deck.cut(200);
deck.burn();
const games = [];
while (deck.hasCards) {
  games.push(play(deck));
}

// setInterval(() => {
//   allCards.forEach(card => {
//     card.classList.toggle("card-in");
//   });
//   console.log("boop");
// }, 3000);

var cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", function() {
    console.log("click");
    card.classList.toggle("card-in");
  });
});

dealBtn.addEventListener("click", () => {
  console.log("click");
  dealBtn.style.opacity = 0;
  allCards.forEach(card => {
    card.classList.remove("card-in");
  });
  setCards(games[gameCount]);

  setTimeout(() => {
    allCards.forEach(card => {
      card.classList.add("card-in");
      dealBtn.style.opacity = 1;
    });
  }, 2000);

  // allCards.forEach(card => {
  //   card.classList.remove("card-in");
  //   card.classList.add("card-out");
  // });

  // clear();
  // setTimeout(() => {
  //   setCards(games[gameCount]);
  //   allCards.forEach(card => {
  //     card.style.animation = "card-in 3s forwards";
  //   });
  //   gameCount++;
  // }, 1500);

  console.log("doneflip");
});

//use a css animation to fade in and flip and reflip and disappear

function clear() {
  allCards.forEach(card => {
    card.style.animation = "card-out 1s forwards";
  });
}

function flipCard(card) {
  card.classList.toggle("face-up");
}

function dealCard(card) {
  card.style.opacity = "1";
}

function placeCard(card) {
  card.style.opacity = "1";
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

function reveal(game) {
  for (leti = 0; i < 4; i++) {
    dealCard(allCards[i]);
  }
  setTimeout;
}
