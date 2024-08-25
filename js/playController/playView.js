
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { span, div } from "../libs/html.js";
import { CardView } from "./cardView.js";
import { CardImageView } from "./cardImageView.js";
import { THEME_TYPE } from "../constants.js";

export class PlayView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'play-view';
        this.container.className = 'play-view-container';

        this.hudContainer = div(this.container, { className: 'play-view-hudContainer'});

        let col = div(this.hudContainer, {className: 'play-view-col'} );
        span(col, { innerHTML: 'Clicks', className: 'play-view-title' });
        this.clicks = span(col, { innerHTML: '0', className: 'play-view-clicks' });
        
        col = div(this.hudContainer, { className: 'play-view-col' });
        this.timeTitle = span(col, { innerHTML: LOCALIZATION.time(), className: 'play-view-title' });
        this.time = span(col, { innerHTML: '0', className: 'play-view-clicks' });


        this.resetBtn = div(this.hudContainer, { className: 'play-view-resetBtn', onclick:this.onReset.bind(this) });
        div(this.resetBtn, { className: 'play-view-resetBtn-icon'});

        let contentContainer = div(this.container, { className: 'play-view-contentContainer'});
        this.cardsContainer = div(contentContainer, { className: 'play-view-cardsContainer'});
        
        this.show();

    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';

        const theme = localStorage.getItem('theme');

        cards.forEach(card => {
            switch (theme) {
                case THEME_TYPE.HEROES:
                case THEME_TYPE.MOVIES:
                case THEME_TYPE.MUSICIANS:
                case THEME_TYPE.VIDEOGAMES:
                    new CardImageView(this.cardsContainer, this.controller, card, theme);
                    
                    break;

                    default: 
                    new CardView(this.cardsContainer, this.controller, card);
                    break;
            }
            
        });


    }

    onReset() {
        this.controller.restartGame();

    }

    updateHub(clicksCounter, timeCounter) {
        this.clicks.innerHTML = `${clicksCounter}`;
        this.time.innerHTML = `${timeCounter}`;
    }

}

customElements.define("play-view", PlayView);

