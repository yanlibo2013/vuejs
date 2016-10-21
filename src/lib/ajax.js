/*
 * @Author: henry yan
 * @Date:   2016-10-21 10:20:39
 * @Desc: ajax 统一封装
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-21 10:20:39
 */

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default function(opt){
    let call_succ = opt.success;
    let call_error=opt.error;
    opt.method = opt.type || 'post';
    opt.type = opt.dataType || 'json';
    opt = {
        cache: 'false',
        ...opt
    };
    //不简写
    this.$http(opt).then((response) => {
        // 响应成功回调
        call_succ && call_succ.call(this, response);
    }, (response) => {
        // 响应错误回调
        call_error && call_error.call(this, response);
    });


    /* this.$http({
         method:'GET',
         url:'http://192.168.30.235:9999/rest/knowledge/list',
         data:{'websiteId':2,'pageSize':20,'pageNo':1,'isTop':0},
         headers: {"X-Requested-With": "XMLHttpRequest"},
         emulateJSON: true
     }).then(function(data){//es5写法
         return{
             toplist:data[0].data.knowledgeList,
             alllist:data[1].data.knowledgeList
         }
         //es6写法 .then()部分
         //.then(([toplist,alllist])=>({toplist,alllist}))
     },function(error){
         //error
     })*/
}
