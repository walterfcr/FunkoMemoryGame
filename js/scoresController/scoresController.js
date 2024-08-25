import { Controller } from "../controller.js";
import { ScoresView } from "./scoresView.js";
import { ScoresService } from "./scoresService.js";

export class ScoresController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new ScoresView(parentElement, this);
        this.service = new ScoresService(this, this.onCompletedGettingScores.bind(this));
    }

    onCompletedGettingScores(scores) {
        this.view.showScores(scores);
        //this.cards = cards;
        //this.view.showCards(cards);
        //this.timer = setInterval(() => {
          //  this.timeCounter += 1;
         //   this.view.updateHub(this.clicksCounter, this.timeCounter);
        //}, 1000);
    }
}
  