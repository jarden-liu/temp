<template>

<div id="app-content" transition-direction="back" >
  <NavBar></NavBar>
  <transition name='page' >
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

  created(){
    this.$state.bind('goBack', function() {
      document.querySelector('#app-content').setAttribute('transition-direction','back');
      this.router.go(-1);
    });

    this.$state.bind('go', function(option) {
      document.querySelector('#app-content').setAttribute('transition-direction','forward');
      this.router.go(option);
    });

    this.$state.bind('push', function(option) {
      document.querySelector('#app-content').setAttribute('transition-direction','forward');
      this.router.push(option);
    });

    this.$state.bind('replace', function(option) {
      document.querySelector('#app-content').setAttribute('transition-direction','forward');
      this.router.replace(option);
    });
  },
  mounted() {
    this.appShow();
    this.transitionDirection='forward';
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
      // console.log(123);
      // console.log(history.state);
    }
  }

};
</script>


<style lang='sass'>
.title {
    font-weight: 600;

}
</style>
