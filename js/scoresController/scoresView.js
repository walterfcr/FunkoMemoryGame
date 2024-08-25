
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'scores-view';
        this.container.className = 'scores-view-container';

        this.show();

    }

    showScores(scores) {
        const [highestScore, ...recentScores] = scores;

        // Render the highest score with a special style
        new ScoreView(this.container, highestScore, true);

        // Render the recent scores
        recentScores.forEach(score => {
            new ScoreView(this.container, score);
        });
    }

}

customElements.define("scores-view", ScoresView);
