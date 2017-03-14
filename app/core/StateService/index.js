import StateService from './StateService';




let stateServicePlugin = function(Vue, router) {
  var stateService = new StateService(router);
  Vue.mixin({
    created: function() {
      this.$state = stateService;
    }
  });

};

export default stateServicePlugin;
