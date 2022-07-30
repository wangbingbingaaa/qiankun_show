import store from "../store";
import axios from 'axios'
import qs from 'qs'
import { ElMessage, ElMessageBox } from 'element-plus'


axios.defaults.timeout = 10000;//  请求过期时间

// http request 拦截器
axios.interceptors.request.use((config) => {

    return config;
}, (error) => {
    return Promise.reject(err);
});

// http response 拦截器
axios.interceptors.response.use((response) => {

    return response;

}, (error) => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.response.statusText = '错误请求'
                break;
            case 401:
                error.response.statusText = '未授权，请重新登录'
                break;
            case 403:
                error.response.statusText = '拒绝访问'
                break;
            case 404:
                error.response.statusText = '请求错误,未找到该资源'
                break;
            case 405:
                error.response.statusText = '请求方法未允许'
                break;
            case 408:
                error.response.statusText = '请求超时'
                break;
            case 500:
                error.response.statusText = '服务器端出错'
                break;
            case 501:
                error.response.statusText = '网络未实现'
                break;
            case 502:
                error.response.statusText = '网络错误'
                break;
            case 503:
                error.response.statusText = '服务不可用'
                break;
            case 504:
                error.response.statusText = '网络超时'
                break;
            case 505:
                error.response.statusText = 'http版本不支持该请求'
                break;
            default:
                error.response.statusText = `连接错误${error.response.status}`
        }
    } else {
        ElMessage.error(error.response.statusText)
    }
    ElMessage.error(error.response.statusText)
    return Promise.reject(error.response)

});




