import { HTMLView } from "../htmlView.js";
import { img } from "../libs/html.js";

export class CardImageView extends HTMLView {
    constructor(parentElement, controller, card, theme){
        super(parentElement, controller);
        this.card = card;
        this.card.isSelected = false;
        this.className = 'card-view';
        this.image = img(this, { className:'card-view-image card-view-hidden', src:`./images/${theme}/${card.icon}`});
        //this.innerHTML = '';
        this.onclick = this.onCardClick.bind(this);
        this.removeChild(this.fade);
    }

    onCardClick() {

        if(this.card.isSelected || this.card.isDiscovered) return;

        const event = new CustomEvent('on-card-click', {
            bubbles: true
        });
        this.dispatchEvent(event);
    }

    showSelected() {
        this.card.isSelected = true;
        this.image.classList.remove('card-view-hidden');
        //this.innerHTML = this.card.icon;
    }

    hideSelected() {
        this.card.isSelected = false;
        this.image.classList.add('card-view-hidden');
        //this.innerHTML = '';
    }

    showDiscovered() {
        this.classList.add('card-view-discovered');
    }

    
}


customElements.define("card-view-image", CardImageView);