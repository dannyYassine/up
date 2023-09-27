import { BasePresenter } from './BasePresenter';

export class AppPresenter extends BasePresenter {
  renderList;

  constructor(view) {
    super(view);
    this.renderList = false;
  }

  onButtonPressed() {
    this.renderList = !this.renderList;
    this.view.updateRenderList(this.renderList);
  }
}
