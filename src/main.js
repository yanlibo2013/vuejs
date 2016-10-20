/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routerMap from './routers';
import store from './vuex/store'
/*import App from './components/App.vue'*/
import App from './app.vue'


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: false  //取消路由中的/#!/,文档中是这么描述的
});
//
routerMap(router);
router.start(App, 'body');


/*new Vue({
    store, // 注入所有的store
    el: 'body',
    components: { App }
});*/
