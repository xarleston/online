require('./bootstrap');

window.Vue = require('vue');

import {ServerTable} from 'vue-tables-2';
Vue.use(ServerTable, {}, false, 'bootstrap4','default');

import StripeForm from './components/StripeForm';
Vue.component('stripe-form', StripeForm);

import Courses from './components/Courses';
Vue.component('courses-list', Courses);

const app = new Vue({
    el: '#app',
});
