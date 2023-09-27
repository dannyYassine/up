export class AppPresenter {
    view;

    constructor(view) {
        this.view = view;
    }

    onButtonPressed() {
        this.view.updateText('Right now!');
    }
}