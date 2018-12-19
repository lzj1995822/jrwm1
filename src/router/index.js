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
        },
        {
            path: '/notice',
            name: 'Notice',
            meta: {
                title: '通知公告'
            },
            component: () => import('@/views/Notice')
        },
        {
            path: '/about',
            name: 'About',
            meta: {
                title: '关于'
            },
            component: () => import('@/views/About')
        },
        {
            path: '/noticeDetail/:id',
            name: 'NOTICE',
            meta: {
                title: '公告详情',
                type: 'Notice'
            },
            component: () => import('@/views/CommonDetail')
        },
        {
            path: '/workPlanDetail/:id',
            name: 'WorkPlanDetail',
            meta: {
                title: '工作详情',
                type: 'WorkPlanDetail'
            },
            component: () => import('@/views/CommonDetail')
        },
        {
            path: '/selfDetail/:id',
            name: 'SelfDetail',
            meta: {
                title: '自选详情',
                type: 'SelfDetail'
            },
            component: () => import('@/views/CommonDetail')
        },
        {
            path: '/featuredActivities/:id',
            name: 'featuredActivities',
            meta: {
                title: '特色活动详情',
                type: 'featuredActivities'
            },
            component: () => import('@/views/CommonDetail')
        },
        {
            path: '/upload/:type/:id',
            name: 'Upload',
            meta: {
                title: '活动上传'
            },
            component: () => import('@/views/Upload')
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
