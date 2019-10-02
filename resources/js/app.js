require('./bootstrap');

window.Vue = require('vue');

import StripeForm from './components/StripeForm';
Vue.component('stripe-form', StripeForm);

const app = new Vue({
    el: '#app',
});
