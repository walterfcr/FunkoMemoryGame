import { GOTO_EVENT_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div, span } from "../libs/html.js";

export class LoadingView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'loading-view';

        this.container.className = 'loading-view-container';

        let logo = div(this.container, { className: 'loading-view-loading-logo'});
        let title = span(this.container, { innerHTML: 'Loading...', className: 'loading-view-title' });
 
 
        this.show();

    }

    show() {
        gsap.to(this.container, { left: 0, duration: 0, ease: "power3.in" });
        gsap.to(this.fade, { opacity: 0.75, duration: 0.25 });
        
    }

    hide() {
        gsap.to(this.container, { opacity: '0', duration: 0.75, ease: "power3.in" });
        gsap.to(this.fade, { opacity: 0, duration: 1, onComplete: this.remove.bind(this) });
   
    }


}

customElements.define("loading-view", LoadingView);
