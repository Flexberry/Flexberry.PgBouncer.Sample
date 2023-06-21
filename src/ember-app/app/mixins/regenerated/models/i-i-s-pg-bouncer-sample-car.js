import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  carNumber: DS.attr('string'),
  carBody: DS.attr('i-i-s-pg-bouncer-sample-car-type'),
  carDate: DS.attr('date'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  brand: DS.belongsTo('i-i-s-pg-bouncer-sample-brand', { inverse: null, async: false }),
  sparePart: DS.hasMany('i-i-s-pg-bouncer-sample-spare-part', { inverse: 'car', async: false })
});

export let ValidationRules = {
  carNumber: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.carNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  carBody: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.carBody.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  carDate: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.carDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  brand: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.brand.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  sparePart: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-car.validations.sparePart.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-pg-bouncer-sample-car', {
    carNumber: attr('Car number', { index: 0 }),
    carBody: attr('Car body', { index: 1 }),
    carDate: attr('Car date', { index: 2 }),
    brand: belongsTo('i-i-s-pg-bouncer-sample-brand', 'Brand', {
      name: attr('Name', { index: 4 })
    }, { index: 3 }),
    sparePart: hasMany('i-i-s-pg-bouncer-sample-spare-part', 'Spare part', {
      name: attr('Name', { index: 0 }),
      quantity: attr('Quantity', { index: 1 }),
      used: attr('Used', { index: 2 }),
      producingCountry: belongsTo('i-i-s-pg-bouncer-sample-producing-country', 'Producing country', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('CarE', 'i-i-s-pg-bouncer-sample-car', {
    carNumber: attr('Car number', { index: 0 }),
    carBody: attr('Car body', { index: 1 }),
    carDate: attr('Car date', { index: 2 }),
    brand: belongsTo('i-i-s-pg-bouncer-sample-brand', 'Brand', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    sparePart: hasMany('i-i-s-pg-bouncer-sample-spare-part', 'Spare part', {
      name: attr('Name', { index: 0 }),
      quantity: attr('Quantity', { index: 1 }),
      used: attr('Used', { index: 2 }),
      producingCountry: belongsTo('i-i-s-pg-bouncer-sample-producing-country', 'Producing country', {
        name: attr('Name', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('CarL', 'i-i-s-pg-bouncer-sample-car', {
    carNumber: attr('Car number', { index: 0 }),
    carBody: attr('Car body', { index: 1 }),
    carDate: attr('Car date', { index: 2 }),
    brand: belongsTo('i-i-s-pg-bouncer-sample-brand', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
