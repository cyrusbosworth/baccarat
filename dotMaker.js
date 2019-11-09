const board = document.querySelector("#board");

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
  // dot.style.transition = "transform 1.5s";
  //dot.style.transform = "scale(1)";
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
