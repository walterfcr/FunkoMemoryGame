import { GOTO_EVENT_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";

export class MenuView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'menu-view';
        let logo = div(this.container, { className: 'menu-view-menu-logo'});

        this.container.className = 'menu-view-container';
        
        this.columnContainer = div(this.container, { className: 'menu-view-column-container' });

        this.loginBtn = div(this.columnContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.login(),   
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.LOGIN)});
        
        this.difficultyBtn = div(this.columnContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.difficulty(), 
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.DIFFICULTY)});
        
        this.themesBtn = div(this.columnContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.themes(),
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.THEMES)});
        
        this.scoresBtn = div(this.columnContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.scores(),
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.SCORES)});
        
        this.creditsBtn = div(this.columnContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.credits(), 
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.CREDITS)});
        
        this.localizationBtn = div(this.columnContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.language(), 
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.LOCALIZATION)});
        
        this.playContainer = div(this.container, { className: 'play-button-container' });
        this.playBtn = div(this.playContainer, { className: 'buttonMenu', innerHTML: LOCALIZATION.play(),
        onclick: this.changeScreen.bind(this, GOTO_EVENT_TYPE.PLAY)});

    }

    changeScreen(eventType) {
        const event = new CustomEvent('goto', {
            detail: {
                eventType: eventType
            },
            bubbles: true
        });

        this.dispatchEvent(event);
    }

    updateLanguage() {
        this.loginBtn.innerHTML = LOCALIZATION.login()
        this.playBtn.innerHTML = LOCALIZATION.play()
        this.scoresBtn.innerHTML = LOCALIZATION.scores()
        this.difficultyBtn.innerHTML = LOCALIZATION.difficulty()
        this.themesBtn.innerHTML = LOCALIZATION.themes()
        this.creditsBtn.innerHTML = LOCALIZATION.credits()
        this.localizationBtn.innerHTML = LOCALIZATION.language()
    } 
}

customElements.define("menu-view", MenuView);







