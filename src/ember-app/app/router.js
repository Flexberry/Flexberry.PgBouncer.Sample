import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pg-bouncer-sample-brand-l');
  this.route('i-i-s-pg-bouncer-sample-brand-e',
  { path: 'i-i-s-pg-bouncer-sample-brand-e/:id' });
  this.route('i-i-s-pg-bouncer-sample-brand-e.new',
  { path: 'i-i-s-pg-bouncer-sample-brand-e/new' });
  this.route('i-i-s-pg-bouncer-sample-car-l');
  this.route('i-i-s-pg-bouncer-sample-car-e',
  { path: 'i-i-s-pg-bouncer-sample-car-e/:id' });
  this.route('i-i-s-pg-bouncer-sample-car-e.new',
  { path: 'i-i-s-pg-bouncer-sample-car-e/new' });
  this.route('i-i-s-pg-bouncer-sample-producing-country-l');
  this.route('i-i-s-pg-bouncer-sample-producing-country-e',
  { path: 'i-i-s-pg-bouncer-sample-producing-country-e/:id' });
  this.route('i-i-s-pg-bouncer-sample-producing-country-e.new',
  { path: 'i-i-s-pg-bouncer-sample-producing-country-e/new' });
  this.route('i-i-s-pg-bouncer-sample-user-report-l');
  this.route('i-i-s-pg-bouncer-sample-user-report-e',
  { path: 'i-i-s-pg-bouncer-sample-user-report-e/:id' });
  this.route('i-i-s-pg-bouncer-sample-user-report-e.new',
  { path: 'i-i-s-pg-bouncer-sample-user-report-e/new' });

  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e/new' });
});

export default Router;
