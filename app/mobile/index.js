import Vue from 'vue';
import config from '../config';
import YDUI from 'vue-ydui';
import VueRouter from 'vue-router';
import router from './pages/AppRouter.js';
import components from './components';
import VueResource from 'vue-resource';
import EventBus from 'EventBus';
import Session from 'Session';
import $q from '$q';
import PlatformTool from 'PlatformTool';
import stateServicePlugin from 'StateService';
import VueFilter from 'vue-filter';
/* css */
import 'flex.css/dist/flex.css';
import 'vue-ydui/dist/ydui.px.css';
import './scss/app.scss';

Vue.use(VueRouter);
Vue.use(YDUI);
Vue.use(config);
Vue.use(VueResource);
Vue.use(VueFilter);
Vue.http.options.emulateJSON = true;
/* core */
Vue.use(EventBus.plugin);
Vue.use(Session.plugin);
Vue.use($q.plugin);
Vue.use(stateServicePlugin, router);
Vue.use(PlatformTool.plugin);


Vue.use(components);



/* eslint-disable no-new */
/* eslint-disable quotes */
new Vue({
  // store,
  router
}).$mount('#app');
