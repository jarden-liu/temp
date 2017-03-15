import Vue from 'vue';
import config from '../config';
import './scss/app.scss';
import Element from 'element-ui';
import '../../theme/index.css';
import VueRouter from 'vue-router';
import router from './pages/AppRouter.js';

Vue.use(VueRouter);
Vue.use(Element);
Vue.use(config);

// console.log(__dirname);

/* eslint-disable no-new */
new Vue({
  // store,
  router
}).$mount('#app');
