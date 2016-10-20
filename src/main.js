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
