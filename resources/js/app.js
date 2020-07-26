/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
const axios = require('axios');


window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPhoneAlt, faComments, faUserCircle, faCheckCircle, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faPhoneAlt)
library.add(faComments)
library.add(faUserCircle)
library.add(faCheckCircle)
library.add(faStar)
library.add(faTag)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('top-bar', require('./components/TopBar.vue').default);
Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('section-1', require('./components/Section1.vue').default);
Vue.component('section-2', require('./components/Section2.vue').default);
Vue.component('section-3', require('./components/Section3.vue').default);
Vue.component('section-4', require('./components/Section4.vue').default);
Vue.component('section-5', require('./components/Section5.vue').default);
Vue.component('section-6', require('./components/Section6.vue').default);
Vue.component('section-7', require('./components/Section7.vue').default);
Vue.component('section-8', require('./components/Section8.vue').default);
Vue.component('section-9', require('./components/Section9.vue').default);
Vue.component('section-10', require('./components/Section10.vue').default);
Vue.component('section-11', require('./components/Section11.vue').default);
Vue.component('section-12', require('./components/Section12.vue').default);
Vue.component('main-page', require('./components/MainPage.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
