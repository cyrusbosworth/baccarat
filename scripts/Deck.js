const CARD_VAL_STR = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const CARD_VAL_INT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const CARD_SUIT = ["S", "D", "H", "C"];

function buildDeck() {
  let deck = [];
  for (let k = 0; k < 8; k++) {
    for (let i = 0; i < CARD_SUIT.length; i++) {
      for (let j = 0; j < CARD_VAL_INT.length; j++) {
        deck.push({
          strValue: CARD_VAL_STR[j],
          value: CARD_VAL_INT[j],
          suit: CARD_SUIT[i],
          path: "cards/" + CARD_VAL_STR[j] + CARD_SUIT[i] + ".svg"
        });
      }
    }
  }
  return deck;
}

export default class Deck {
  constructor() {
    this.cards = buildDeck();
    this.shuffle();
    this.finalDeck = [];
    this.hasCards = true;
  }

  shuffle() {
    let i = 0,
      j = 0,
      temp = null;

    for (i = this.cards.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  deal() {
    if (this.finalDeck.length < 15) this.hasCards = false;
    return this.finalDeck.pop();
  }

  cut(position) {
    this.finalDeck = [...this.cards.slice(position), ...this.cards.slice(0, position)];
  }

  burn() {
    const burnCard = this.finalDeck.pop();
    for (let i = 0; i < burnCard.value; i++) {
      this.finalDeck.pop();
    }
  }
}
