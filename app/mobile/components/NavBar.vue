<template>
<yd-navbar :title="title" id="NarBar">
  <div slot="left" id="NavBarLeft">
    <yd-navbar-back-icon @click.native="goBack()" v-if="showBackBtn">返回</yd-navbar-back-icon>
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

Vue.directive('back-button', function(el, binding) {
  NarBarBus.$emit('backButtonStatusUpdated', binding.value);
});


export default {
  name: 'NavBar',
  data() {
    return {
      title: '',
      showBackBtn: true
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
    vm.EventBus.$on('backButtonStatusUpdated', function(status) {
      vm.updateBackButtonStatus(status);
    });

  },
  methods: {
    updateTitle(title) {
      vm.title = title;
    },
    updateBackButtonStatus(status){
      vm.showBackBtn = status;
    },
    goBack() {
      vm.$state.goBack();
    }
  }
};
</script>
