<template>
<div>
  <div class="nav">
    <el-row class="nav-header" type="flex" justify="space-between" align="bottom">
      <el-row type="flex" align="bottom">
        <img class="logo" :src='logoImage'>
        </img>
        <div class="title">权限管理平台</div>
      </el-row>
      <el-row type="flex" align="bottom">
        <div class="padding-right">用户123</div>
        <div>登出</div>
      </el-row>
    </el-row>
    <div class="nav-tab">
      <div class="tab-content">
        <el-row class="tab-title" type="flex" align="middle">
          <i class="el-icon-menu padding-right"></i>
          <div>我的主页</div>
        </el-row>
      </div>
    </div>
    <el-row class="nav-content" type="flex">
      <!-- <el-col class="nav-menu"> -->
      <!-- <h5>分组</h5> -->
      <el-menu mode="vertical" default-active="1" class="nav-menu">
        <el-menu-item-group v-for="menu in menus" :title="menu.title">
          <el-menu-item @click="selectMenu(item)" v-for="item in menu.items" class="nav-menu-item" :index="item.index"><i :class="item.icon"></i>{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-menu>
      <el-col>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>

</div>
</template>



<script>
let vm;
import menus from './menus';
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello Vue!',
      logoImage: require('logo.jpg'),
      menus: menus
    };
  },
  created() {
  },
  mounted() {
    this.appShow();
  },
  methods: {
    selectMenu(item) {
      this.$router.push(item.router);
    },
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
  }

};
</script>


<style lang="sass">
.title {
    font-weight: 600;

}
</style>
