import { Controller } from "../controller.js";
import { ThemesView } from "./themesView.js";

export class ThemesController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new ThemesView(parentElement, this);
    }
}
  