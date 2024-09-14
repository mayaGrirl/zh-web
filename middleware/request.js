// plugins/axios.js
import axios from 'axios';

let baseURL = process.env.NUXT_APP_BASE_API
if (!process.server) {
    const runtimeConfig = useRuntimeConfig()
    baseURL = runtimeConfig.public.apiUrl
}

const request = axios.create({
    baseURL: baseURL, // 设置 API 基础路径
    timeout: 30000, // 设置请求超时时间
    // 其他配置...
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么，例如添加 token 到 headers
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么，例如根据状态码判断是否成功
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default request;

