import axios from 'axios';
import Vue from 'vue';

axios.defaults.timeout = 5000000;
// axios.defaults.baseURL = 'http://192.168.31.233:8080';  //贵浩
axios.defaults.baseURL = 'https://api.tangs.ai';  //超哥
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;   // 正式

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'X-Access-Token': localStorage.token ? localStorage.token : '',
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code == 20002) {
            sessionStorage.clear()
            localStorage.clear()
            // Vue.$this.$router.push({
            //     path: "/userinfo/verification",
            //     query: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            // })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

export function gets(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.defaults.baseURL = 'https://api.metaclone.chat';  //超哥
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}