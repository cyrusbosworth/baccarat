const playerCard1 = document.querySelector('.player .first-card');
const playerCard2 = document.querySelector('.player .second-card');
const playerCard3 = document.querySelector('.player .third-card');

const bankerCard1 = document.querySelector('.banker .first-card');
const bankerCard2 = document.querySelector('.banker .second-card');
const bankerCard3 = document.querySelector('.banker .third-card');

import timers from './timer.js';

const allCards = [playerCard1, playerCard2, bankerCard1, bankerCard2, playerCard3, bankerCard3];

export default function flipCards(game) {
	return new Promise(function(resolve, reject) {
		//Need the timeout display block for FF renderings
		allCards.forEach(card => {
			card.style.display = 'none';
		});
		setTimeout(() => {
			allCards.forEach(card => {
				card.style.display = 'block';
			});

			clear();
		}, 20);
		setCards(game);
		setTimeout(() => {
			playerCard1.classList.add('card-in');
			playerCard2.classList.add('card-in');
		}, timers.firstDealPlayer);

		setTimeout(() => {
			bankerCard1.classList.add('card-in');
			bankerCard2.classList.add('card-in');
		}, timers.firstDealBanker);

		if (game.playerHand[2]) {
			setTimeout(() => {
				playerCard3.classList.add('card-in');
			}, timers.thirdCard1);
			if (game.bankerHand[2]) {
				setTimeout(() => {
					bankerCard3.classList.add('card-in');
				}, timers.thirdCard2);
			}
		} else if (game.bankerHand[2]) {
			setTimeout(() => {
				bankerCard3.classList.add('card-in');
			}, timers.thirdCard1);
		}
		setTimeout(() => {
			resolve();
		}, timers.finishTimes[6 - game.cards]);
	});
}

export function clear() {
	allCards.forEach(card => {
		card.classList.remove('card-in', 'card-in-no-ani');
	});
}

export function flipCardsNoAni(game) {
	clear();
	setCards(game);
	playerCard1.classList.add('card-in-no-ani');
	playerCard2.classList.add('card-in-no-ani');

	if (game.playerHand[2]) playerCard3.classList.add('card-in-no-ani');

	bankerCard1.classList.add('card-in-no-ani');
	bankerCard2.classList.add('card-in-no-ani');

	if (game.bankerHand[2]) bankerCard3.classList.add('card-in-no-ani');
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
