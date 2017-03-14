<template>
<div class="nav-content">
  <slot></slot>
</div>
</template>



<script>
export default {
  name: 'NavContent'
};
</script>


<style lang="sass" scoped>
.nav-content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1em;
    color: #2c3e50;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    background-color: #f8f8f8;
    padding:2px;
}
</style>
