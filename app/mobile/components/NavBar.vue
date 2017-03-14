<template>
<yd-navbar :title="title" id="NarBar">
  <div slot="left" id="navBarLeft">
    <yd-navbar-back-icon @click.native="goBack()">返回</yd-navbar-back-icon>
  </div>
  <div slot="right" id="NavBarRight">
  </div>
</yd-navbar>
</template>



<script>
import Vue from 'vue';
let vm;
let NarBarBus = new Vue();
let propsData = {};
Vue.directive('nav-title', function(el, binding) {
  NarBarBus.$emit('titleUpdated', binding.value);
});


export default {
  name: 'NavBar',
  data() {
    return {
      title: ''
    };
  },
  beforeCreate() {
    this.EventBus = NarBarBus;
  },
  created() {
    vm = this;
    vm.EventBus.$on('titleUpdated', function(title) {
      vm.updateTitle(title);
    });

  },
  methods: {
    updateTitle(title) {
      vm.title = title;
    },
    goBack(){
      vm.$state.goBack();
    }
  }
};
</script>
