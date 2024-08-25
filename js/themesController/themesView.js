import { THEME_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div } from "../libs/html.js";

export class ThemesView extends HTMLView {
    constructor(parentElement, controller) {
        super(parentElement, controller);
        this.className = 'themes-view';

        this.container.className = 'themes-view-container';

        this.logo1 = div(this.container, { className: 'themes-view-logo1' });
        this.logo2 = div(this.container, { className: 'themes-view-logo2' });
        this.logo3 = div(this.container, { className: 'themes-view-logo3' });
        this.logo4 = div(this.container, { className: 'themes-view-logo4' });


        this.heroesBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.heroes(),
            onclick: () => this.handleButtonClick(THEME_TYPE.HEROES, 'themes-view-logo1')
        });
        this.moviesBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.movies(),
            onclick: () => this.handleButtonClick(THEME_TYPE.MOVIES, 'themes-view-logo2')
        });
        this.videogamesBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.videogames(),
            onclick: () => this.handleButtonClick(THEME_TYPE.VIDEOGAMES, 'themes-view-logo3')
        });
        this.musiciansBtn = div(this.container, {
            className: 'button',
            innerHTML: LOCALIZATION.musicians(),
            onclick: () => this.handleButtonClick(THEME_TYPE.MUSICIANS, 'themes-view-logo4')
        });

        this.show();

        const selectedLogo = localStorage.getItem('selectedLogo');
        if (selectedLogo) {
            this.showLogo(selectedLogo);
        }
    }

   


    updateLanguage() {
        this.heroesBtn.innerHTML = LOCALIZATION.heroes();
        this.moviesBtn.innerHTML = LOCALIZATION.movies();
        this.videogamesBtn.innerHTML = LOCALIZATION.videogames();
        this.musiciansBtn.innerHTML = LOCALIZATION.musicians();
    }

    
    changeTheme(themeType) {
        const event = new CustomEvent('change-theme', {
            detail: { theme: themeType },
            bubbles: true
        });

        this.dispatchEvent(event);
    }

 
    handleButtonClick(themeType, logoToShow) {
        this.changeTheme(themeType);
        this.showLogo(logoToShow);

        localStorage.setItem('selectedLogo', logoToShow);
    }

    showLogo(logoToShow) {
   
        const logos = ['themes-view-logo1', 'themes-view-logo2', 'themes-view-logo3', 'themes-view-logo4'];

        logos.forEach(logoClass => {
            const logoElement = document.querySelector(`.${logoClass}`);
            if (logoElement) {
                logoElement.style.display = (logoClass === logoToShow) ? 'block' : 'none';
            }
        });
    }
}

customElements.define("themes-view", ThemesView);