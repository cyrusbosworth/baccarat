//TODO bankroll localdata
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

//Place bets and change bankroll amount
Object.keys(betInputs).forEach(bet => {
  betInputs[bet].addEventListener("change", function() {
    if (this.value >= 0 && this.value % 1 === 0 && this.value <= bankRoll) {
      bankRoll += Number(betsSaved[bet] - this.value);
      betsSaved[bet] = Number(this.value);
      bankRollDisplay.textContent = bankRoll;
    } else {
      this.value = "";
      alert("Invalid Bet");
    }
  });
});

function clearBets() {
  betsSaved.player = 0;
  betsSaved.playerBonus = 0;
  betsSaved.bankerBonus = 0;
  betsSaved.banker = 0;
  betsSaved.tie = 0;

  betInputs.player.value = "";
  betInputs.playerBonus.value = "";
  betInputs.bankerBonus.value = "";
  betInputs.banker.value = "";
  betInputs.tie.value = "";
}

function calcWinning(game) {
  let winnings = 0;
  if (game.winner === "tie") {
    winnings += betsSaved.tie * 8 + betsSaved.tie;
    winnings += betsSaved.player;
    winnings += betsSaved.banker;
    if (game.isNatural) {
      winnings += betsSaved.playerBonus;
      winnings += betsSaved.bankerBonus;
    }
  }

  if (game.winner === "player") {
    winnings += betsSaved.player * 2;
    if (game.bonus >= 1)
      winnings += betsSaved.playerBonus + betsSaved.playerBonus * game.bonus;
  }

  if (game.winner === "banker") {
    winnings += betsSaved.banker * 2;
    if (game.bonus >= 1)
      winnings += betsSaved.bankerBonus + betsSaved.bankerBonus * game.bonus;
  }
  return winnings;
}
