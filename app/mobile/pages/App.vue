<template>
<div>
  <yd-navbar title="App Title"></yd-navbar>
  <transition name="slide">
    <router-view></router-view>
  </transition>
</div>
</template>



<script>
let vm;

export default {
  name: 'app',
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  mounted() {
    this.appShow();
  },
  methods: {
    appShow() {
      const {
        PAGE_START_TIME
      } = window;
      const PAGE_END_TIME = new Date().getTime(); // 结束时间
      const diffTime = PAGE_END_TIME - PAGE_START_TIME;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        document.querySelector('.page-preloading ').className += ' hide';

      }, diffTime > 1000 ? 0 : 1000 - diffTime);
    }
  },
  watch:{
    $route(to,form){
      console.log(123);
      console.log(history.state);
    }
  }

};
</script>


<style lang="sass">
.title {
    font-weight: 600;

}
</style>
