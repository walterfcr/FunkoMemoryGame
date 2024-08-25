import { Controller } from "../controller.js";
import { CreditsView } from "./creditsView.js";

export class CreditsController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new CreditsView(parentElement, this);
    }
}
  