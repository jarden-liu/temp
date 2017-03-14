<template>
<div class="nav-view page" v-bind:class="{'has-nar-bar':hasNarBar}" v-nav-title="title">
  <slot></slot>
</div>
</template>

<script>

export default {

  name: 'NavView',
  data() {
    return {
      hasNarBar: true
    };
  },
  props: {
    title: {
      type: String
    }
  }
};
</script>


<style lang="sass">
.nav-view {
    height: 100%;

}
.has-nar-bar {
    height: calc(100% - 45px) !important;
    top: 45px !important;
}
</style>
