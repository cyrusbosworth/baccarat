//TODO bankroll localdata
let bankRoll = Number(localStorage.getItem("bankRoll")) || 1000;

const bankRollDisplay = document.querySelector("#bankroll");
bankRollDisplay.textContent = bankRoll;

const betInputs = {
  player: document.querySelectorAll("input")[3],
  banker: document.querySelectorAll("input")[1],
  playerBonus: document.querySelectorAll("input")[4],
  bankerBonus: document.querySelectorAll("input")[2],
  tie: document.querySelectorAll("input")[0]
};

const betSaved = {
  player: 0,
  banker: 0,
  playerBonus: 0,
  bankerBonus: 0,
  tie: 0
};

function updateBankRoll(amt) {
  bankRoll += amt;
  localStorage.setItem("bankRoll", bankRoll);
}

//Place bets and change bankroll amount
Object.keys(betInputs).forEach(bet => {
  betInputs[bet].addEventListener("change", function() {
    if (this.value >= 0 && this.value % 1 === 0 && this.value <= bankRoll) {
      updateBankRoll(Number(betSaved[bet] - this.value));

      betSaved[bet] = Number(this.value);
      bankRollDisplay.textContent = bankRoll;
    } else {
      this.value = "";
      alert("Invalid Bet");

      //clear saved bet from invalid input and restore bankroll
      updateBankRoll(betSaved[bet]);
      //bankRoll += betSaved[bet];
      betSaved[bet] = 0;
      bankRollDisplay.textContent = bankRoll;
    }
  });
});

export function clearBets() {
  // for (bet of Object.keys(betSaved)) {
  //   betSaved[bet] = 0;
  // }
  Object.keys(betSaved).forEach(bet => {
    betSaved[bet] = 0;
  });
  Object.keys(betInputs).forEach(bet => {
    betInputs[bet].value = "";
  });

  // for (bet of Object.keys(betInputs)) {
  //   betInputs[bet].value = "";
  // }
}
export function returnBets() {
  Object.keys(betSaved).forEach(bet => {
    //bankRoll += betSaved[bet];
    updateBankRoll(betSaved[bet]);
    betSaved[bet] = 0;
  });
  bankRollDisplay.textContent = bankRoll;
}
export function calcWinnings(game) {
  let winnings = 0;
  if (game.winner === "tie") {
    winnings += betSaved.tie * 8 + betSaved.tie;
    winnings += betSaved.player;
    winnings += betSaved.banker;
    if (game.isNatural) {
      winnings += betSaved.playerBonus;
      winnings += betSaved.bankerBonus;
    }
  }

  if (game.winner === "player") {
    winnings += betSaved.player * 2;
    if (game.bonus >= 1)
      winnings += betSaved.playerBonus + betSaved.playerBonus * game.bonus;
  }

  if (game.winner === "banker") {
    winnings += betSaved.banker * 2;
    if (game.bonus >= 1)
      winnings += betSaved.bankerBonus + betSaved.bankerBonus * game.bonus;
  }

  updateBankRoll(winnings);
  //bankRoll += winnings;
  bankRollDisplay.textContent = bankRoll;
}
