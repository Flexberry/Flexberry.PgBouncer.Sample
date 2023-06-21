import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPgBouncerSampleBrandLForm from './forms/i-i-s-pg-bouncer-sample-brand-l';
import IISPgBouncerSampleCarLForm from './forms/i-i-s-pg-bouncer-sample-car-l';
import IISPgBouncerSampleProducingCountryLForm from './forms/i-i-s-pg-bouncer-sample-producing-country-l';
import IISPgBouncerSampleUserReportLForm from './forms/i-i-s-pg-bouncer-sample-user-report-l';
import IISPgBouncerSampleBrandEForm from './forms/i-i-s-pg-bouncer-sample-brand-e';
import IISPgBouncerSampleCarEForm from './forms/i-i-s-pg-bouncer-sample-car-e';
import IISPgBouncerSampleProducingCountryEForm from './forms/i-i-s-pg-bouncer-sample-producing-country-e';
import IISPgBouncerSampleUserReportEForm from './forms/i-i-s-pg-bouncer-sample-user-report-e';
import IISPgBouncerSampleBrandModel from './models/i-i-s-pg-bouncer-sample-brand';
import IISPgBouncerSampleCarModel from './models/i-i-s-pg-bouncer-sample-car';
import IISPgBouncerSampleProducingCountryModel from './models/i-i-s-pg-bouncer-sample-producing-country';
import IISPgBouncerSampleSparePartModel from './models/i-i-s-pg-bouncer-sample-spare-part';
import IISPgBouncerSampleUserReportModel from './models/i-i-s-pg-bouncer-sample-user-report';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pg-bouncer-sample-brand': IISPgBouncerSampleBrandModel,
    'i-i-s-pg-bouncer-sample-car': IISPgBouncerSampleCarModel,
    'i-i-s-pg-bouncer-sample-producing-country': IISPgBouncerSampleProducingCountryModel,
    'i-i-s-pg-bouncer-sample-spare-part': IISPgBouncerSampleSparePartModel,
    'i-i-s-pg-bouncer-sample-user-report': IISPgBouncerSampleUserReportModel
  },

  'application-name': 'Async open xml reports sample',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Async open xml reports sample',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Async open xml reports sample',
          title: 'Async open xml reports sample'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'async-open-xml-reports-sample': {
          caption: 'PgBouncerSample',
          title: 'PgBouncerSample',
          'i-i-s-pg-bouncer-sample-brand-l': {
            caption: 'Brand',
            title: ''
          },
          'i-i-s-pg-bouncer-sample-car-l': {
            caption: 'Car',
            title: ''
          },
          'i-i-s-pg-bouncer-sample-producing-country-l': {
            caption: 'Producing country',
            title: ''
          },
          'i-i-s-pg-bouncer-sample-user-report-l': {
            caption: 'User report',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-pg-bouncer-sample-brand-l': IISPgBouncerSampleBrandLForm,
    'i-i-s-pg-bouncer-sample-car-l': IISPgBouncerSampleCarLForm,
    'i-i-s-pg-bouncer-sample-producing-country-l': IISPgBouncerSampleProducingCountryLForm,
    'i-i-s-pg-bouncer-sample-user-report-l': IISPgBouncerSampleUserReportLForm,
    'i-i-s-pg-bouncer-sample-brand-e': IISPgBouncerSampleBrandEForm,
    'i-i-s-pg-bouncer-sample-car-e': IISPgBouncerSampleCarEForm,
    'i-i-s-pg-bouncer-sample-producing-country-e': IISPgBouncerSampleProducingCountryEForm,
    'i-i-s-pg-bouncer-sample-user-report-e': IISPgBouncerSampleUserReportEForm
  },

});

export default translations;
