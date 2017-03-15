import IndexPage from './App';
import VueRouter from 'vue-router';
import Page1 from './Page1';
import Page2 from './Page2';
import Home from './Home';

let childrens = [Page1, Page2, Home];

var router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: IndexPage,
      redirect: '/home',
      children: childrens
    }
  ]
});

export default router;
