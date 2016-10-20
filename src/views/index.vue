/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
    <div id="app" :class="div-app">
        <toolbar></toolbar>
        <notes-list></notes-list>
        <editor></editor>
    </div>
</template>
<style>
  .div-app{
      background-color:rebeccapurple;
  }
</style>

<script>
    import Toolbar from '../components/Toolbar.vue'
    import NotesList from '../components/NotesList.vue'
    import Editor from '../components/Editor.vue'

    export default {
        components: {
            Toolbar,
            NotesList,
            Editor
        }
    }
</script>