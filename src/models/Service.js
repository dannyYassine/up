export class Service {
  id;
  name;
  branch;

  constructor(model = {}) {
    this.id = model.id;
    this.name = model.name;
    this.branch = model.branch;
  }
}
