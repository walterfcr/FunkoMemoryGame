import { DIFFICULTY_TYPE, GOTO_EVENT_TYPE, THEME_TYPE } from "../constants.js";
import { Service } from "../service.js";

export class PlayService extends Service{
    constructor(controller, onCompleted){
        super(controller, onCompleted);
        this.requestCards();
    }

    requestCards(){

        let difficulty = localStorage.getItem('difficulty');
        let theme = localStorage.getItem('theme');

        if (!difficulty) {
            difficulty = DIFFICULTY_TYPE.HIGH;
        }

        if (!theme) {
            theme = THEME_TYPE.HEROES;
        }


        let url = `https://funko-memory-game-be.vercel.app/cards/${difficulty}/${theme}`;
        //let url = `https://localhost:3000/cards/${difficulty}/${theme}`;


        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            let data = JSON.parse(request.response);
            this.onCompleted(data.cards);
        }

        request.send();
        
    }

    sendScore(score) {
        let url = `https://funko-memory-game-be.vercel.app/score`;
        //let url = `https://localhost:3000/score`;

        let request = new XMLHttpRequest();
        request.open('POST', url);
        request.onload = () => {
           // let data = JSON.parse(request.response);
           // this.onCompleted(data.cards);
        }

        request.send(JSON.stringify(score));
    }
}