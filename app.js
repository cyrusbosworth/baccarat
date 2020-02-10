import Deck from "./Deck.js";
import play from "./play.js";
import drawDot, {clearBoard} from "./dotMaker.js";
import flipCard, {flipCardsNoAni, clear} from "./flip.js";
import {increaseStats} from "./stats.js";
import {setSummary, hideSummary, displaySummary} from "./summary.js";
import {clearBets, calcWinnings, returnBets} from "./bet.js";
import {closeModal, openModal} from "./modals.js";

const playBtn = document.querySelector("#play-button");
const skipBtn = document.querySelector("#skip-button");
const newBtn = document.querySelector("#new-shoe-button");
const helpBtn = document.querySelector("#help-button");

let deck = new Deck();
let games = [];

function init() {
  deck = new Deck();
  deck.cut(Math.floor(Math.random() * 364) + 51);
  deck.burn();
  while (deck.hasCards) {
    games.push(play(deck));
  }
}

init();
let gameCount = 0;

playBtn.addEventListener("click", async () => {
  hideSummary();

  await flipCard(games[gameCount]);
  drawDot(games[gameCount]);
  increaseStats(games[gameCount].winner);
  setSummary(games[gameCount]);
  displaySummary();
  calcWinnings(games[gameCount]);
  clearBets();

  gameCount++;
  if (gameCount === games.length - 1) {
    openModal("shuffle");
  }
});

skipBtn.addEventListener("click", () => {
  returnBets();
  hideSummary();
  clearBets();
  flipCardsNoAni(games[gameCount]);
  drawDot(games[gameCount]);
  increaseStats(games[gameCount].winner);
  setSummary(games[gameCount]);
  displaySummary();
  gameCount++;
  if (gameCount >= games.length - 1) {
    openModal("shuffle");
  }
});

newBtn.addEventListener("click", () => {
  clear();
  init();
  hideSummary();
  clearBoard();
  closeModal();
});

helpBtn.addEventListener("click", () => {
  openModal("help");
});
