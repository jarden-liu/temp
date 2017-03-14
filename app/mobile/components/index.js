import NavBar from './NavBar';
import NavView from './NavView';
import NavContent from './NavContent';
import NavFooterBar from './NavFooterBar';
import NarBarButtons from './NarBarButtons';




let plugin = function(Vue) {
  Vue.component(NavBar.name, NavBar);
  Vue.component(NavView.name, NavView);
  Vue.component(NavContent.name, NavContent);
  Vue.component(NavFooterBar.name, NavFooterBar);
  Vue.component(NarBarButtons.name, NarBarButtons);
};

export {
  NavBar,
  NavView,
  NavContent,
  NavFooterBar,
  NarBarButtons
};

export default plugin;
