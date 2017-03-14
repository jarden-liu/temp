import Session from './Session';

Session.plugin = function(Vue) {
  Vue.mixin({
    created: function() {
      this.$Session = Session;
    }
  });
};

export default Session;
