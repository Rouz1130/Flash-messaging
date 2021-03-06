import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flash-message-queue', 'Integration | Component | flash message queue', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flash-message-queue}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flash-message-queue}}
      template block text
    {{/flash-message-queue}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
