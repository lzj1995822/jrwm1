/**
 * @desc ajax模块封装
 * @author asher
 * @date 2018/09/30
 */
import axios from 'axios';

// 后台返回的请求状态码
const CODE_MAP = {
    SUCCESS: 200,
    ERROR: 500
};
// 创建实例
const service = axios.create({
    baseURL: 'http://47.254.44.188:8088/', // 基准地址
    timeout: 50000 // 超时时间
});

//接受router对象
let router = null;

// 请求拦截器
service.interceptors.request.use(config => {
    // token可以存在浏览器端的sessionStorage中，也可以用Vuex管理
    const token = localStorage.getItem('token');
    // 如果当前有token，则请求头加上token
    if (token) {
        config.headers['token'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 返回拦截器
service.interceptors.response.use(
    response => {
    // 判断后台返回的请求状态码 如果错误直接弹匡提示
        if (response.data.success) {
            if (response.data.content) {
                return Promise.resolve(response.data.content);
            } else {
                return Promise.resolve(response.data.contents)
            }
        } else {
            // 请求失败则要弹提示框
            return Promise.reject(response.data.msg);
        }
    },
    error => {
        // 处理HTTP请求错误
        this.router.push({path:'/login'});
        return Promise.reject(error);
    }
);

export const getRouter = (router) => {
    this.router = router
};

/* 动态代理 根据函数名动态生成请求
 * 前提是后台请求路径为Restful风格,这里只封装了增删改查 分页待封装
 * 调用形式：api.getUsers(1)
 * 生成请求格式：service({"GET","users/1"})
 */
export const generate = new Proxy({}, {
    get: function (target, prop) {
        const method = /^[a-z]+/.exec(prop)[0];
        let path = prop.substring(method.length);
        path = path.substring(0, 1).toLowerCase() + path.substring(1) + '/';
        return (...args) => { // <------ 返回动态构造的函数！
            let url = path;
            if (typeof args[0] === 'string') {
                url += args.shift();
            }
            let data = null;
            if (typeof args[0] === 'object') {
                data = args.shift();
            }
            // 控制成功是否需要彈框
            let showMessage = args.pop() !== false;
            return service({method, url, data, showMessage});
        };
    }
});

/*
 * 普通请求
 */
export const common = new Proxy({}, {
    get: function () {
        // 返回动态构造的函数！
        return (...args) => {
            let method = args[0] || {};
            let url = args[1] || {};
            let data = args[2] || {};
            // 控制成功是否需要彈框
            let showMessage = args.pop() !== false;
            return service({method, url, data, showMessage});
        };
    }
});
