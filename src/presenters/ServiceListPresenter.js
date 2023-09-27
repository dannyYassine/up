import { Service } from '../models/Service';
import { BasePresenter } from './BasePresenter';

export class ServiceListPresenter extends BasePresenter {
  async load() {
    const response = await fetch('https://api.render.com/v1/services?limit=20', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{}}'
      }
    });
    let services = await response.json();

    services = services.map((data) => new Service(data.service));

    this.view.setServices(services);
  }
}
