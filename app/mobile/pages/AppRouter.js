import IndexPage from './App';
import VueRouter from 'vue-router';
import Page1 from './Page1';
import Page2 from './Page2';



let childrens = [Page1, Page2];

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: IndexPage,
    redirect: '/page1',
    children: childrens
  }]
});








export default router;
