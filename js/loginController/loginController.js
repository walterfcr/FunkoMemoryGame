import { Controller } from "../controller.js";
import { LoginView } from "./loginView.js";

export class LoginController extends Controller{
    constructor(parentElement, appManager){
        super();
        this.appManager = appManager;
        this.view = new LoginView(parentElement, this);
    }
}
  