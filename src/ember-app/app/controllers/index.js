import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.caption'),
          title: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.title'),
          children: [{
            link: 'i-i-s-pg-bouncer-sample-brand-l',
            caption: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-brand-l.caption'),
            title: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-brand-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-pg-bouncer-sample-car-l',
            caption: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-car-l.caption'),
            title: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-car-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-pg-bouncer-sample-producing-country-l',
            caption: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-producing-country-l.caption'),
            title: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-producing-country-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-pg-bouncer-sample-user-report-l',
            caption: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-user-report-l.caption'),
            title: i18n.t('forms.application.sitemap.async-open-xml-reports-sample.i-i-s-pg-bouncer-sample-user-report-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})