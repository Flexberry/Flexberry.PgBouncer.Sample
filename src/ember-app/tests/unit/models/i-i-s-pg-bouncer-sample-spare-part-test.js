import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pg-bouncer-sample-spare-part', 'Unit | Model | i-i-s-pg-bouncer-sample-spare-part', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-pg-bouncer-sample-brand',
    'model:i-i-s-pg-bouncer-sample-car',
    'model:i-i-s-pg-bouncer-sample-producing-country',
    'model:i-i-s-pg-bouncer-sample-spare-part',
    'model:i-i-s-pg-bouncer-sample-user-report',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
