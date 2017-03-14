import PlatformTool from './PlatformTool';

let platformTool = new PlatformTool();

platformTool.plugin = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      this.$platformTool = platformTool;
    }
  });
};

export default platformTool;
