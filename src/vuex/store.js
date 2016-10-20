/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
Vue.use(Vuex)
export default new Vuex.Store(apps);
