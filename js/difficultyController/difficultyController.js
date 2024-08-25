import { Controller } from "../controller.js";
import { DifficultyView } from "./difficultyView.js";

export class DifficultyController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new DifficultyView(parentElement, this);
    }
}
  