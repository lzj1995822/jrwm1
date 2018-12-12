import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
let router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login')
        },
        {
            path: '/home',
            name: 'Home',
            meta: {
                title: '新时代文明实践中心'
            },
            component: () => import('@/views/Home'),
        },
        {
            path: '/personal',
            name: 'Personal',
            component: () => import('@/views/Personal')
        },
        {
            path: '/workPlan',
            name: 'WorkPlan',
            meta: {
                title: '工作计划'
            },
            component: () => import('@/views/WorkPlan')
        },
        {
            path: '/optionalActivities',
            name: 'OptionalActivities',
            meta: {
                title: '自选活动'
            },
            component: () => import('@/views/OptionalActivities')
        },
        {
            path: '/featuredActivities',
            name: 'FeaturedActivities',
            meta: {
                title: '特色活动'
            },
            component: () => import('@/views/FeaturedActivities')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        localStorage.removeItem("token");
    }
    let token = localStorage.getItem("token");
    if (!token && to.path != "/login") {
        next({
            path: "/login"
        });
    } else {
        next();
    }
});

export default router;
