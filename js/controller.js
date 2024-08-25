export class Controller{
    view;
    service;

    constructor(parent) {}

    remove() {
        console.log('remove');
        this.view.hide();
    }  
}