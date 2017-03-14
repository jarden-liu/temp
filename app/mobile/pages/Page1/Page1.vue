<template>
<NavView title="page1" showBackBtn="false">
  <!-- <NarBarButtons align="right">
    <button>123</button>
  </NarBarButtons> -->
  <NavContent>
    page1

    <yd-button @click.native="goPage2">
      {{msg}}
    </yd-button>

    <input v-model="msg" />
  </NavContent>

  <NavFooterBar>
    123
  </NavFooterBar>
</NavView>
</template>


<script>
import RouteData from 'RouteData';
let vm;
export default {
  mixins: [RouteData],
  name: 'Page1',
  data() {
    return {
      msg: '123',
      abc: false
    };
  },
  created() {
    vm = this;
  },
  methods: {
    goBack: function() {
      this.$state.goBack();
    },
    goPage2() {
      this.$state.push('page2');
    }
  }
};
</script>
