import Deck from './Deck.js';
import play from './play.js';
import drawDot, { clearBoard, drawDotNoAni } from './dotMaker.js';
import flipCard, { flipCardsNoAni, clear } from './flip.js';
import { increaseStats, resetStats } from './stats.js';
import { setSummary, hideSummary, displaySummary } from './summary.js';
import { clearBets, calcWinnings, returnBets } from './bet.js';
import { closeModal, openModal } from './modals.js';

const playBtn = document.querySelector('#play-button');
const skipBtn = document.querySelector('#skip-button');
const newBtn = document.querySelector('#new-shoe-button');
const helpBtn = document.querySelector('#help-button');
const stats = document.querySelector('#stats');

let games = [];
let gameCount = 0;
let playing = false;

init();

function init() {
	playing = false;
	if (localStorage.getItem('gameCount')) {
		clearBoard();
		games = JSON.parse(localStorage.getItem('games'));
		gameCount = Number(localStorage.getItem('gameCount'));

		for (let i = 0; i < gameCount; i++) {
			drawDotNoAni(games[i]);
			increaseStats(games[i].winner);
			console.log(gameCount);
			console.table(games[1]);
		}
	} else {
		let deck = new Deck();
		deck.cut(Math.floor(Math.random() * 364) + 51);
		deck.burn();
		while (deck.hasCards) {
			games.push(play(deck));
		}
	}
}

playBtn.addEventListener('click', async () => {
	if (playing) return;
	playBtn.classList.add('disabled');
	skipBtn.classList.add('disabled');
	hideSummary();
	playing = true;
	await flipCard(games[gameCount]);
	playing = false;
	playBtn.classList.remove('disabled');
	skipBtn.classList.remove('disabled');
	drawDot(games[gameCount]);
	increaseStats(games[gameCount].winner);
	setSummary(games[gameCount]);
	displaySummary();
	calcWinnings(games[gameCount]);
	clearBets();

	gameCount++;
	if (gameCount === games.length - 1) {
		openModal('shuffle');
		playing = true;
	}
	saveGame();
});

function saveGame() {
	localStorage.setItem('gameCount', gameCount);
	localStorage.setItem('games', JSON.stringify(games));
}

skipBtn.addEventListener('click', () => {
	if (playing) return;
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
		openModal('shuffle');
		playing = true;
	}
	saveGame();
});

newBtn.addEventListener('click', () => {
	localStorage.removeItem('games');
	localStorage.removeItem('gameCount');
	gameCount = 0;
	games = [];
	resetStats();
	clear();
	init();
	hideSummary();
	clearBoard();
	closeModal();
});

helpBtn.addEventListener('click', () => {
	openModal('help');
});
