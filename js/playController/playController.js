import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new PlayView(parentElement, this);
        this.service = new PlayService(this, this.onCompletedGettingCards.bind(this));

        this.clicksCounter = 0;
        this.timeCounter = 0;
        this.timer = null;


        this.cardView1 = null;
        this.cardView2 = null;

        this.showCardsTimer = null;
        this.cards = null;

        this.view.addEventListener('on-card-click', (event) => {

            this.onCardSelection(event.target);
        });
    }

    onCardSelection(cardView) {

        if (this.showCardsTimer !== null) return;
        if(this.cardView1 !== null && this.cardView2 !== null) return;

        this.clicksCounter += 1;
        this.view.updateHub(this.clicksCounter, this.timeCounter);

        if (this.cardView1 === null){
            this.cardView1 = cardView
            this.cardView1.showSelected();
        } else if(this.cardView2 === null){
            this.cardView2 = cardView
            this.cardView2.showSelected();

            if(this.isCardPairMatching()){
                this.cardView1.card.isDiscovered = true;
                this.cardView2.card.isDiscovered = true;
                this.cardView1.showDiscovered();
                this.cardView2.showDiscovered();
                this.cardView1 = null;
                this.cardView2 = null;

                if(this.isGameCompleted()){
                    console.log('game completed');
                    clearInterval(this.timer);
                    this.timer = null;

                    const score = {
                        "difficulty": localStorage.getItem('difficulty'),
                        "clicks": this.clicksCounter,
                        "score": (this.clicksCounter + this.timeCounter),
                        "time": this.timeCounter,
                        "username": localStorage.getItem('username')
                    };
                    this.service.sendScore(score);
                }
            } else{

                this.showCardsTimer = setTimeout(() => {
                    this.cardView1.hideSelected();
                    this.cardView2.hideSelected();
                    this.cardView1 = null;
                    this.cardView2 = null;
                    clearTimeout(this.showCardsTimer);
                    this.showCardsTimer = null;

                }, 500);

            }
        }

    }

    isCardPairMatching() {
        return this.cardView1.card.id === this.cardView2.card.id;
    }

    isGameCompleted() {
        let isCompleted = false;
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
            }
        }
        
        return true;
    }
    onCompletedGettingCards(cards) {
        this.cards = cards;
        this.view.showCards(cards);
        this.timer = setInterval(() => {
            this.timeCounter += 1;
            this.view.updateHub(this.clicksCounter, this.timeCounter);
        }, 1000);
    }

    restartGame() {
        clearInterval(this.timer);
        this.timer = null;
        clearTimeout(this.showCardsTimer);
        this.showCardsTimer = null;

        this.cardView1 = null;
        this.cardView2 = null;
        this.cards = null;

        this.clicksCounter = 0;
        this.timeCounter = 0;
        this.view.updateHub(this.clicksCounter, this.timeCounter);
        
        this.service.requestCards();
        


    }
}
  