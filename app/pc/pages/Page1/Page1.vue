<template>
<div>
  page1
  <router-link to="/page2">
    <el-button type="primary">Go page2</el-button>
  </router-link>
</div>
</template>


<script>
export default {
  name: 'Page1',
  data() {
    return {};
  },
  created() {

    console.log(this.$options);
  },
  methods: {

  }
};
</script>
