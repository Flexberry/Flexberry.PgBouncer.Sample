import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  userName: DS.attr('string'),
  userEmail: DS.attr('string'),
  reportId: DS.attr('guid'),
  reportTaskStartTime: DS.attr('date'),
  status: DS.attr('i-i-s-pg-bouncer-sample-report-status-type'),
  file: DS.attr('file'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string')
});

export let ValidationRules = {
  userName: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.userName.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  userEmail: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.userEmail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  reportId: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.reportId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  reportTaskStartTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.reportTaskStartTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  file: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.file.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-i-s-pg-bouncer-sample-user-report.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-pg-bouncer-sample-user-report', {
    userName: attr('User name', { index: 0 }),
    userEmail: attr('User email', { index: 1 }),
    reportId: attr('Report id', { index: 2 }),
    reportTaskStartTime: attr('Report task start time', { index: 3 }),
    status: attr('Status', { index: 4 }),
    file: attr('File', { index: 5 })
  });

  modelClass.defineProjection('UserReportE', 'i-i-s-pg-bouncer-sample-user-report', {
    userName: attr('', { index: 0 }),
    userEmail: attr('', { index: 1 }),
    reportId: attr('', { index: 2, hidden: true }),
    reportTaskStartTime: attr('', { index: 3 }),
    status: attr('', { index: 4 }),
    file: attr('', { index: 5 })
  });

  modelClass.defineProjection('UserReportL', 'i-i-s-pg-bouncer-sample-user-report', {
    userName: attr('', { index: 0 }),
    userEmail: attr('', { index: 1 }),
    reportId: attr('', { index: 2, hidden: true }),
    reportTaskStartTime: attr('', { index: 3 }),
    status: attr('', { index: 4 }),
    file: attr('', { index: 5 })
  });
};
