// function score(hand) {
//   const total = hand.reduce((a, b) => a + b.value, 0);
//   return total % 10;
// }

// export default class Games {
//   games = [];
//   constructor(deck) {
//     this.deck = deck;
//     while (this.deck.finalDeck.length > 15) {
//       this.game = {
//         playerHand: [],
//         bankerHand: [],
//         playerScore: 0,
//         bankerScore: 0,
//         isNatural: false,
//         winner: null,
//         bonus: 0
//       };
//       this.initialDeal();
//       console.log(`BSCORE ${bankerScore}`);
//       if (this.game.bankerScore > 7 || this.game.playerScore > 7) {
//         this.game.isNatural = true;
//         this.game.bonus = 1;
//       } else {
//         this.drawCards();
//         this.determineBonus();
//       }

//       this.determineWinner();
//       this.games.push(this.game);
//     }
//   }

//   initialDeal() {
//     this.game.playerHand.push(this.deck.deal());
//     this.game.bankerHand.push(this.deck.deal());
//     this.game.playerHand.push(this.deck.deal());
//     this.game.bankerHand.push(this.deck.deal());
//     this.scoreHands();
//   }

//   drawCards() {
//     //Player stands on 6 and up
//     if (this.game.playerScore >= 6) {
//       //If player stands banker draws on five and lower
//       if (this.game.bankerScore <= 5) {
//         this.game.bankerHand.push(this.deck.deal());
//       }
//       //Player has less than 6 and hits
//     } else {
//       this.game.playerHand.push(this.deck.deal());
//       const thirdCard = this.game.playerHand[2].value;
//       //banker draws on 2 and below no matter what player drew
//       if (this.game.bankerScore <= 2) {
//         this.game.bankerHand.push(this.deck.deal());
//       }
//       //bankers score and players third card draw rules
//       if (this.game.bankerScore === 3 && thirdCard !== 8) {
//         this.game.bankerHand.push(this.deck.deal());
//       }
//       if (this.game.bankerScore === 4 && (thirdCard >= 2 && thirdCard <= 7)) {
//         this.game.bankerHand.push(this.deck.deal());
//       }

//       if (this.game.bankerScore === 5 && (thirdCard >= 4 && thirdCard <= 7)) {
//         this.game.bankerHand.push(this.deck.deal());
//       }

//       if (this.game.bankerScore === 6 && (thirdCard >= 6 && thirdCard <= 7)) {
//         this.game.bankerHand.push(this.deck.deal());
//       }
//     }
//     this.scoreHands();
//   }

//   determineWinner() {
//     if (this.game.playerScore === this.game.bankerScore) {
//       this.game.winner = "tie";
//     } else {
//       this.game.winner = this.game.playerScore > this.game.bankerScore ? "player" : "banker";
//     }
//   }

//   determineBonus() {
//     const bonuses = [0, 0, 0, 0, 1, 2, 4, 6, 10, 30];
//     this.game.bonus = bonuses[Math.abs(this.game.playerScore - this.game.bankerScore)];
//   }

//   scoreHands() {
//     this.game.playerScore = score(this.game.playerHand);
//     this.game.bankerScore = score(this.game.bankerHand);
//   }
// }
