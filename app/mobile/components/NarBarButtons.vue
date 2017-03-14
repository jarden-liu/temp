<template>
<div>
  <slot></slot>
</div>
</template>



<script>
export default {
  name: 'NarBarButtons',
  created() {},
  mounted() {
    if (!this.align || this.align === 'left') {
      document.querySelector('#NavBarLeft').appendChild(this.$el);
    } else if (this.align === 'right') {
      document.querySelector('#NavBarRight').appendChild(this.$el);
    }
  },
  props: {
    align: {
      type: String
    }
  },
  beforeDestroy() {
    this.$el.remove();
  },
  data() {
    return {};
  }
};
</script>
