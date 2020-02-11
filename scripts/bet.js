import { openModal, closeModal } from './modals.js';

let bankRoll = Number(localStorage.getItem('bankRoll')) || 1000;

const bankRollDisplay = document.querySelector('#bankroll');
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', () => {
	updateBankRoll(bankRoll * -1 + 1000);
	closeModal();
});

bankRollDisplay.textContent = bankRoll;

const betInputs = {
	player: document.querySelectorAll('input')[3],
	banker: document.querySelectorAll('input')[1],
	playerBonus: document.querySelectorAll('input')[4],
	bankerBonus: document.querySelectorAll('input')[2],
	tie: document.querySelectorAll('input')[0]
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
	localStorage.setItem('bankRoll', bankRoll);
	bankRollDisplay.textContent = bankRoll;
}

//Place bets and change bankroll amount
Object.keys(betInputs).forEach(bet => {
	betInputs[bet].addEventListener('change', function() {
		if (this.value >= 0 && this.value % 1 === 0 && this.value <= bankRoll) {
			updateBankRoll(Number(betSaved[bet] - this.value));

			betSaved[bet] = Number(this.value);
		} else {
			this.value = '';
			openModal('invalid');

			//clear saved bet from invalid input and restore bankroll
			updateBankRoll(betSaved[bet]);
			this.classList.remove('active-bet');
			this.classList.add('bet-ani');
			betSaved[bet] = 0;
		}
	});
});
Object.keys(betInputs).forEach(bet => {
	betInputs[bet].addEventListener('input', function() {
		console.log(this);
		if (Number(this.value) > 0) {
			this.classList.remove('bet-ani');
			this.classList.add('active-bet');
			console.log(this);
		}
		if (this.value === '0' || this.value === '') {
			this.classList.remove('active-bet');
			this.classList.add('bet-ani');
		}
	});
});
export function clearBets() {
	Object.keys(betSaved).forEach(bet => {
		betSaved[bet] = 0;
	});
	Object.keys(betInputs).forEach(bet => {
		betInputs[bet].value = '';
		betInputs[bet].classList.remove('active-bet');
		betInputs[bet].classList.remove('bet-ani');
		betInputs[bet].classList.add('bet-ani');
	});
}

export function resetStyles() {
	Object.keys(betInputs).forEach(bet => {});
}
export function returnBets() {
	Object.keys(betSaved).forEach(bet => {
		updateBankRoll(betSaved[bet]);
		betSaved[bet] = 0;
	});
}
export function calcWinnings(game) {
	let winnings = 0;
	if (game.winner === 'tie') {
		winnings += betSaved.tie * 8 + betSaved.tie;
		winnings += betSaved.player;
		winnings += betSaved.banker;
		if (game.isNatural) {
			winnings += betSaved.playerBonus;
			winnings += betSaved.bankerBonus;
		}
	}

	if (game.winner === 'player') {
		winnings += betSaved.player * 2;
		if (game.bonus >= 1) winnings += betSaved.playerBonus + betSaved.playerBonus * game.bonus;
	}

	if (game.winner === 'banker') {
		winnings += betSaved.banker * 2;
		if (game.bonus >= 1) winnings += betSaved.bankerBonus + betSaved.bankerBonus * game.bonus;
	}
	updateBankRoll(winnings);
}
