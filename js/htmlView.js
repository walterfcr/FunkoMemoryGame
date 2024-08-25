import { div } from "./libs/html.js";

export class HTMLView extends HTMLElement {
    constructor(parentElement, controller){
        super();
        parentElement.appendChild(this);
        this.controller = controller;
        this.fade = div(this, { className: 'fade' });
        this.container = div(this, {});
    }

    show() {
        gsap.to(this.container, { left: 0, duration: 0.75, ease: "power3.in" });
        gsap.to(this.fade, { opacity: 0.75, duration: 0.25 });
        
    }

    hide() {
        gsap.to(this.container, { left: '100%', duration: 0.75, ease: "power3.in" });
        gsap.to(this.fade, { opacity: 0, duration: 1, onComplete: this.remove.bind(this) });
   
    }

    remove() {
       this.parentElement.removeChild(this);
    }
}

customElements.define("html-view", HTMLView);



