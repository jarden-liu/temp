import Vue from 'vue';
var bus = new Vue();

bus.plugin = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      this.$bus = bus;
    }
  });
};

export default bus;
