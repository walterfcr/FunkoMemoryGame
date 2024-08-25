
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";

export class ScoreView extends HTMLView {
    constructor(parentElement, score, isHighestScore = false) {
        super(parentElement, null);
        this.score = score;
        this.className = 'score-view';

        /*if (isHighestScore) {
            // Remove the old class
            this.classList.remove('score-view-row1');
            this.classList.remove('score-view-row2');
        
            // Add the new class
            this.classList.add('highest-score');
        }*/

        this.innerHTML = '';
        const row1 = div(this, { className: 'score-view-row1' });
        const row2 = div(this, { className: 'score-view-row2' });

        if (isHighestScore) {
            row1.classList.remove('score-view-row1');
            row2.classList.remove('score-view-row2');
            row1.classList.add('score-view-row1-highest');
            row2.classList.add('score-view-row2-highest');
        } else {
            row1.classList.remove('score-view-row1-highest');
            row2.classList.remove('score-view-row2-highest');
            row1.classList.add('score-view-row1');
            row2.classList.add('score-view-row2');
        }
   

        let title = span(row1, { innerHTML: this.score.username, className: 'score-view-title' });

        const col1 = div(row2, { className: 'score-view-col' });
        const col2 = div(row2, { className: 'score-view-col' });
        const col3 = div(row2, { className: 'score-view-col' });

        span(col1, { className: 'score-view-name', innerHTML: 'SCORE' });
        span(col1, { className: 'score-view-value', innerHTML: this.score.score });

        span(col2, { className: 'score-view-name', innerHTML: 'CLICKS' });
        span(col2, { className: 'score-view-value', innerHTML: this.score.clicks });

        span(col3, { className: 'score-view-name', innerHTML: 'TIME' });
        span(col3, { className: 'score-view-value', innerHTML: this.score.time });
    }
}

customElements.define("score-view", ScoreView);
