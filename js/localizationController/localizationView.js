import { LANGUAGE_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";

export class LocalizationView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'localization-view';
        this.container.className = 'localization-view-container';

        let logo = div(this.container, { className: 'localization-view-logo'});

        this.esBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.spanish(), onclick: this.changeLanguage.bind(this, LANGUAGE_TYPE.ES)});
        this.enBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.english(), onclick: this.changeLanguage.bind(this, LANGUAGE_TYPE.EN)});
 
        this.show();

    }

    changeLanguage(language) {
        localStorage.setItem('language', language);
        this.esBtn.innerHTML = LOCALIZATION.spanish();
        this.enBtn.innerHTML = LOCALIZATION.english();

}}

customElements.define("localization-view", LocalizationView);
