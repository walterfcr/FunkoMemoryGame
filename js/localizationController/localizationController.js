import { Controller } from "../controller.js";
import { LocalizationView } from "./localizationView.js";

export class LocalizationController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new LocalizationView(parentElement, this);
    }
}
  