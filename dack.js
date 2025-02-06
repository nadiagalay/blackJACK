import Card from "./card";

class Deck {
    constructor() {
        this.cards = [];
    }
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    dealCard() {
        return this.cards.pop();
    }
    createDeck() {
        for (let i = 0; i < 10; i++) {
            let card = new Card("card" + i, i, `img${1}.png`);
            }
        }
    }
