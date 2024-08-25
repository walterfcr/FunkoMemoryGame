import { GOTO_EVENT_TYPE } from "../constants.js";
import { Service } from "../service.js";

export class LoadingService extends Service{
    constructor(controller){
        super(controller);
        this.fetch();
    }

    fetch(){
        window.setTimeout(() => {
            //console.log('finish fetch');
            this.changeScreen(GOTO_EVENT_TYPE.MENU);

        }, 2000);
    }

    changeScreen(eventType) {
        const event = new CustomEvent('goto', {
            detail: {
                eventType: eventType
            },
            bubbles: true
        });

        window.dispatchEvent(event);
    }
}