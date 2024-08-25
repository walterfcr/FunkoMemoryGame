import { Controller } from "../controller.js";
import { MenuView } from "./menuView.js";

export class MenuController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new MenuView(parentElement, this);
    }

    updateLanguage() {
        this.view.updateLanguage();
    } 
}
  

