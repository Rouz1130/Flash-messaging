import Ember from 'ember';

export default Ember.Route.extend({

  checkMessageExists() {
    const flashMessageQueue = this.get('flashMessageQueue');

    return !!flashMessageQueue.get('content').length;
  },

});
