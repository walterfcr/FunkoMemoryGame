
import { GOTO_EVENT_TYPE } from "../constants.js";
import { LOCALIZATION } from "../localization.js";
import { HTMLView } from "../htmlView.js";
import { div, input, span } from "../libs/html.js";

export class LoginView extends HTMLView{
    constructor(parentElement, controller){
        super(parentElement, controller);
        this.className = 'login-view';

        this.container.className = 'login-view-container';

        this.title = span(this.container, { className: 'login-view-title', innerHTML: LOCALIZATION.loginTitle()});
        let logo = div(this.container, { className: 'login-view-login-logo'});
        this.usernameInput = input(this.container, {className: 'login-view-input', placeholder: LOCALIZATION.username()});
        this.loginBtn = div(this.container, { className: 'button', innerHTML: LOCALIZATION.login(), 
        onclick: this.onLoginBtn.bind(this, GOTO_EVENT_TYPE.LOGIN)});

        this.show();

    }

    onLoginBtn() {
        if(this.usernameInput.value !== ''){
            let username = this.usernameInput.value;
        const event = new CustomEvent('save-username', {
            detail: {
                username: username
            },
            bubbles: true
        });
        this.dispatchEvent(event);
}}}

customElements.define("login-view", LoginView);
