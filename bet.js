let bankRoll = 1000;
const bankRollDisplay = document.querySelector("#bankroll");

const betInputs = {
  player: document.querySelectorAll("input")[3],
  banker: document.querySelectorAll("input")[1],
  playerBonus: document.querySelectorAll("input")[4],
  bankerBonus: document.querySelectorAll("input")[2],
  tie: document.querySelectorAll("input")[0]
};

const betsSaved = {
  player: 0,
  banker: 0,
  playerBonus: 0,
  bankerBonus: 0,
  tie: 0
};

let bankrollTxt = document.querySelector("#bankroll");

function changeBet() {
  console.log(this.value);
  console.log(bets[this.dataset.bet]);
  bets[this.dataset.bet] = this.value || 0;
}

// Object.values(betInputs).forEach(bet => {
//   bet.addEventListener("change", changeBet);
// });

Object.keys(betInputs).forEach(bet => {
  betInputs[bet].addEventListener("change", function() {
    if (this.value >= 0 && this.value % 1 === 0 && this.value <= bankRoll) {
      bankRoll += betsSaved[bet] - this.value;
      betsSaved[bet] = this.value;
      bankRollDisplay.textContent = bankRoll;
    } else {
      this.value = "";
      alert("Invalid Bet");
    }
  });
});
