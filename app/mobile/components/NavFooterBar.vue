<template>
<div class="nav-footer-bar">
  <slot></slot>
</div>
</template>



<script>
export default {
  name: 'NavFooterBar',
  data() {
    return {};
  },
  created(){
    this.$parent.$data.hasNarFooterBar = true;
  }
};
</script>


<style lang='sass'>
.nav-footer-bar {
    position: absolute;
    bottom: 0;
    height: 44px;
    z-index: 10;
    width: 100%;
    background-color: white;
    border-top: 1px solid #d2d2d2;
}
.nav-footer-bar .mint-button {
    height: 31px !important;
    font-size: 14px;
}
.has-footer-bar:after {
    content: ' ';
    height: 41px;
    display: block;
}
</style>
