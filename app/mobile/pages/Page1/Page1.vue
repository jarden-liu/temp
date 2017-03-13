<template>
<div>
  page1
  <router-link to="/page2">
    <yd-button size="large" type="primary">Go page2</yd-button>
  </router-link>
</div>
</template>


<script>


export default {
  name:'Page1',
  data(){
    return {};
  },
  created(){

    console.log(this.$options);
  },
  methods:{

  }
};

</script>
