<template>
<div class="nav-view page" v-bind:class="{'has-nav-bar':hasNarBar,'has-nav-footer-bar':hasNarFooterBar}" v-nav-title="title" v-back-button="showBackButton">
  <slot></slot>

</div>
</template>

<script>
export default {

  name: 'NavView',
  data() {
    return {
      hasNarBar: true,
      hasNarFooterBar:false
    };
  },
  computed:{
    showBackButton(){
      return this.showBackBtn === true || this.showBackBtn === 'true';
    }
  },
  created(){

  },
  props: {
    title: {
      type: String
    },
    showBackBtn: {
      type: String,
      default: 'true'
    }
  }
};
</script>


<style lang="sass">
.nav-view {
    height: 100%;

}
.has-nav-bar {
    height: calc(100% - 45px) !important;
    top: 45px !important;
}
.has-nav-footer-bar {
  padding-bottom:45px;
}
</style>
