
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";

export class CreditsView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'credits-view';

        this.container.className = 'credits-view-container';
        this.show();

    }

    changeTheme(creditsType) {

}}

customElements.define("credits-view", CreditsView);
