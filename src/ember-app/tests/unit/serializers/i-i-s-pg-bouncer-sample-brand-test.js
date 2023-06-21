import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-pg-bouncer-sample-brand', 'Unit | Serializer | i-i-s-pg-bouncer-sample-brand', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-pg-bouncer-sample-brand',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-pg-bouncer-sample-car-type',
    'transform:i-i-s-pg-bouncer-sample-report-status-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
