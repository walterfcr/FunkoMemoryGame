import { DIFFICULTY_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";

export class DifficultyView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'difficulty-view';

        this.container.className = 'difficulty-view-container';

        this.logo1 = div(this.container, { className: 'difficulty-logo1' });
        this.logo2 = div(this.container, { className: 'difficulty-logo2' });
        this.logo3 = div(this.container, { className: 'difficulty-logo3' });
        
        this.lowBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.low(),
            onclick: () => this.handleButtonClick(DIFFICULTY_TYPE.LOW, 'difficulty-logo1')
        });

        this.medBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.medium(),
            onclick: () => this.handleButtonClick(DIFFICULTY_TYPE.MEDIUM, 'difficulty-logo2')
        });

        this.highBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.high(),
            onclick: () => this.handleButtonClick(DIFFICULTY_TYPE.HIGH, 'difficulty-logo3')
        });
 
        this.show();

        const selectedLogo2 = localStorage.getItem('selectedLogo2');
        if (selectedLogo2) {
            this.showLogo(selectedLogo2);
        }

    }

    changeScreen(difficulty) {
        const event = new CustomEvent('change-difficulty', {
            detail: {
                difficulty: difficulty
            },
            bubbles: true
        });
 
        this.dispatchEvent(event);
    }

    handleButtonClick(difficultyType, logoToShow) {
        this.changeScreen(difficultyType);
        this.showLogo(logoToShow);

        localStorage.setItem('selectedLogo2', logoToShow);
    }

    showLogo(logoToShow) {
   
        const logos = ['difficulty-logo1', 'difficulty-logo2', 'difficulty-logo3'];

        logos.forEach(logoClass => {
            const logoElement = document.querySelector(`.${logoClass}`);
            if (logoElement) {
                logoElement.style.display = (logoClass === logoToShow) ? 'block' : 'none';
            }
        });
    }

}

customElements.define("difficulty-view", DifficultyView);
