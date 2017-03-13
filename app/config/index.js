import domain from './domain';


let configs = {};

Object.assign(configs,domain);

export default function(Vue) {
  Vue.mixin({
    created: function() {
      this.$config = configs;
    }
  });
};
