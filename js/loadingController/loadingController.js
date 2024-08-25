import { Controller } from "../controller.js";
import { LoadingView } from "./loadingView.js";
import { LoadingService } from "./loadingService.js";

export class LoadingController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new LoadingView(parentElement, this);
        this.service = new LoadingService(this);
    }
}
  