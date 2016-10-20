/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor from './Editor.vue';

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>
<style lang="sass">
  @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
  @import "../assets/css/style.scss";
</style>