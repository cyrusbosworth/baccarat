const summary = document.querySelector("#summary");
const score = document.querySelector("#score-display");
const msg = document.querySelector("#score-msg");

export function setSummary(game) {
  game.winner == "tie"
    ? (msg.textContent = "tie")
    : (msg.textContent = `${game.winner} wins`);

  summary.style.color = `var(--${game.winner})`;

  score.textContent = `${game.playerScore} - ${game.bankerScore}`;
}

export function hideSummary() {
  summary.classList.remove("summary-in");
  summary.classList.add("summary-out");
}

export function displaySummary() {
  summary.classList.remove("summary-out");
  summary.classList.add("summary-in");
}

export function toggleSummaryDisplay() {
  summary.classList.toggle("summary-ani");
}
