import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/Home'),
        },
        {
            path: '/exchange',
            name: 'exchange',
            component: () => import('@/views/Exchange')
        },
        {
            path: '/result',
            name: 'result',
            component: () => import('@/views/Result')
        }
    ]
})
