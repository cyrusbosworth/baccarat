const board = document.querySelector("#board");
//different timeouts for different amount of card flip animations per hand
const timers = [5000, 7500, 9500];
let currentRun;

let currentWinner = 0;

function newRun() {
  currentRun = document.createElement("div");
  currentRun.classList.add("run");
  board.appendChild(currentRun);
}
newRun();

export default function drawDot(game) {
  const dot = createDot(game);
  currentRun.appendChild(dot);
  setTimeout(() => {
    dot.style.transform = "scale(1)";
    console.log(timers[game.cards - 4]);
  }, timers[game.cards - 4]);
}

function createDot(game) {
  if (game.winner !== "tie") {
    if (currentWinner !== game.winner) {
      newRun();
    }
    currentWinner = game.winner;
  }

  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.classList.add(game.winner + "-dot");
  const inner = document.createElement("div");
  if (game.isNatural) {
    inner.classList.add("natural");
  } else if (game.bonus !== 0) {
    inner.classList.add("bonus");
    inner.innerText = game.bonus;
  }
  dot.appendChild(inner);

  return dot;
}
