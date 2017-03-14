import $q from 'q';

$q.plugin = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      this.$q = $q;
    }
  });
};

export default $q;
