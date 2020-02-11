//get all timers in one file
const coef = 1;

let cardOutDelay = 100;
let cardFlipDur = 750 * coef;
let cardinDur = 1000 * coef;
let dealDelay = 250 * coef;

const firstDealPlayer = cardOutDelay;
const firstDealBanker = firstDealPlayer + cardFlipDur + cardinDur + dealDelay;
const thirdCard1 = firstDealBanker + cardFlipDur + cardinDur + dealDelay;
const thirdCard2 = thirdCard1 + cardFlipDur + cardinDur + dealDelay;

let timers = {
	firstDealPlayer: firstDealPlayer,
	firstDealBanker: firstDealBanker,
	thirdCard1: thirdCard1,
	thirdCard2: thirdCard2,
	finishTimes: [
		thirdCard2 + cardFlipDur + cardinDur + dealDelay,
		thirdCard2 + dealDelay,
		thirdCard1 + dealDelay
	]
};

//add stats

export default timers;
