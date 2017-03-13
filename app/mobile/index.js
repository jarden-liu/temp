import Vue from 'vue';
import config from '../config';
import './scss/app.scss';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
import VueRouter from 'vue-router';
import router from './pages/AppRouter.js';



Vue.use(VueRouter);
Vue.use(YDUI);
Vue.use(config);


/* eslint-disable no-new */
/* eslint-disable quotes */
console.log(__dirname);
new Vue({
  // store,
  router
}).$mount('#app');
