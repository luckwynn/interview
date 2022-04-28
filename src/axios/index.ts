import axios, { AxiosRequestConfig, Method } from 'axios';
import { notification } from 'antd';

// 定义接口
interface PendingType {
  url?: string;
  method?: Method;
  params: any;
  data: any;
  cancel: (e: any) => void;
}

const pending: Array<PendingType> = [];
// 创建axios实例
const request = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
});

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key;
    const list: PendingType = pending[key];
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel('操作太频繁，请稍后再试');
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

request.interceptors.request.use(
  (config) => {
    removePending(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (config) => {
    removePending(config.config);
    const { status } = config;
    if (status === 200) {
      return config.data;
    }
    return config;
  },
  (errors) => {
    const {
      data: { error },
    } = errors.response;
    notification.error({
      message: error.message,
      placement: 'topRight',
      duration: 2000,
    });
    return error.response;
  },
);

export default request;
