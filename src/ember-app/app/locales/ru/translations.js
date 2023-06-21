import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Async open xml reports sample',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Async open xml reports sample',
          title: 'Async open xml reports sample'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
