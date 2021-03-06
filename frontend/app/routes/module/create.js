import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ModuleCreateRoute extends Route {
  @inject
  me;

  model() {
    return this.store.createRecord('module', {
      creator: this.me.get('user')
    });
  }
}
