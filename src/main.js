/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import Vue from 'vue'
import VueResource from 'vue-resource';
import store from './vuex/store'
import App from './components/App.vue'


Vue.use(VueResource);


new Vue({
    store, // 注入所有的store
    el: 'body',
    components: { App }
});
