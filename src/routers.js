export default function (router) {
    router.map({
        '/': {				//首页
            name: 'home',
            component: function (resolve) {
                require(['./views/index.vue'], resolve);
            }
            // component:require(['./views/index.vue'])
        },
        '/login': {				//首页
            name: 'login',
            component: function (resolve) {
                require(['./views/login.vue'], resolve);
            }
            // component:require(['./views/index.vue'])
        }
        /* 404路由 */
        // '*': {
        //     component: function(resolve){
        //         require(['./views/index.vue'],resolve);
        //     }
        // }
    })
}