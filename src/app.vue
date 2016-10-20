/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
* @describe
* 根组件，主要用于引入全局的css和js
*/
<template>
  <router-view></router-view>
</template>

<script>
  import store from './vuex/store'
  export default {
    replace: false,
    store
  }
</script>
<style lang="sass">
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import "./assets/css/style.scss";
</style>

