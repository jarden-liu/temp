<template>
<div>

  <div style='text-align:center;'>
    <img :src='logoImage' />
  </div>
  <div class='content'>
    <h1 class='title'>WELCOME</h1>
    <div>
      {{message}}
    </div>
    <router-link to="/page1">
      <el-button type="primary">Go page1</el-button>
    </router-link>
    <router-link to="/page2">
      <el-button type="primary">Go page2</el-button>
    </router-link>
  </div>

</div>
</template>


<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'Hello Vue!',
      logoImage: require('logo.jpg'),
    };
  },
  created() {
  },
  methods: {

  }
};
</script>
