/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import routerMap from './routers';
import App from './app.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: false  //取消路由中的/#!/,文档中是这么描述的
});
//
routerMap(router);
router.start(App, 'body');