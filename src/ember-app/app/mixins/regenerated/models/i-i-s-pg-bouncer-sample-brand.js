import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-brand.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-brand.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-brand.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-brand.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-brand.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-pg-bouncer-sample-brand', {
    name: attr('Name', { index: 0 })
  });

  modelClass.defineProjection('BrandE', 'i-i-s-pg-bouncer-sample-brand', {
    name: attr('Name', { index: 0 })
  });

  modelClass.defineProjection('BrandL', 'i-i-s-pg-bouncer-sample-brand', {
    name: attr('Name', { index: 0 })
  });
};
