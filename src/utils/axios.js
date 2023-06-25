import axios from 'axios'
import {Message} from 'element-ui'
// import store from '@/store'
// import router from '@/router'
 
// 接口错误情况处理
// const errorHandler = err => {
//   console.log(err, 'err')
//   if (err.response.status === 500) {
//     Message.error('服务器异常，请联系管理员！')
//   }
//   return Promise.reject(err)
// }
const service = axios.create({
  // process.env.NODE_ENV === 'development' 判断是否为开发环境,常规项目中通过.env文件进行读取
  withCredentials: false, // cookie
//   baseURL: window.ipConfig.baseUrl
  // timeout: 100000
})
 
// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['authToken'] = localStorage.getItem("authToken");
    // if (token) {
    //   config.headers.token = token
    // }
    // if (config.data && config.data.post) {
    //   if (config.method === 'post') {
    //     config.data.post = null
    //     config.params = config.data
    //   }
    // }
    // if (config.requestBase) {
    //   config.baseURL = window.ipConfig.baseUrl
    // }
    return config
  },
  error => {
    console.log(error)
    // return Promise.reject()
  }
)
 
// 响应拦截器
// service.interceptors.response.use(
//   response => {
//       // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
//       // 否则的话抛出错误
//       if (response.code === 200) {
//           return Promise.resolve(response);
//       } else {
//           return Promise.reject(response);
//       }
//   },
//   // 服务器状态码不是2开头的的情况
//   // 这里可以跟你们的后台开发人员协商好统一的错误状态码
//   // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
//   // 下面列举几个常见的操作，其他需求可自行扩展
//   error => {
//       if (error.response.status) {
//           switch (error.response.status) {
//               // 401: 未登录
//               // 未登录则跳转登录页面，并携带当前页面的路径
//               // 在登录成功后返回当前页面，这一步需要在登录页操作。
//               case 401:
//                   router.replace({
//                       path: '/login',
//                       query: {
//                           redirect: router.currentRoute.fullPath
//                       }
//                   });
//                   break;

//               // 403 token过期
//               // 登录过期对用户进行提示
//               // 清除本地token和清空vuex中token对象
//               // 跳转登录页面
//               case 403:
//                   Message.error('登录过期，请重新登录');
                   
//                   // 清除token
//                   localStorage.removeItem('token');
//                   store.commit('loginSuccess', null);
//                   // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//                   setTimeout(() => {
//                       router.replace({
//                           path: '/login',
//                           query: {
//                               redirect: router.currentRoute.fullPath
//                           }
//                       });
//                   }, 1000);
//                   break;

//               // 404请求不存在
//               case 404:
//                   Message.error('网络请求不存在');
//                   break;
//               // 其他错误，直接抛出错误提示
//               default:
//                   Message.error('服务器异常，请稍后重试');
//           }
//           return Promise.reject(error.response);
//       }
//   }
// );
 
export default service