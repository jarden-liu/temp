import NavBar from './NavBar';
import NavView from './NavView';
import NavContent from './NavContent';




let plugin = function(Vue) {
  Vue.component(NavBar.name, NavBar);
  Vue.component(NavView.name, NavView);
  Vue.component(NavContent.name, NavContent);

};

export {
  NavBar,
  NavView,
  NavContent
};

export default plugin;
