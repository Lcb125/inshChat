import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/views/layout/Layout'
// import Login from '../views/login/Login'
 
 
Vue.use(Router)        //使用路由
 
 
// 静态路由
export const constantRoutes = [
  // 登录
  // {
  //   path: '/login',
  //   component: () => import('../views/login/index'),
  //   hide: true    // 不是菜单
  // },
  // // 聊天
  // {
  //   path: '/chat',
  //   component: () => import('../views/chatView/chat'),
  //   hide: true    // 不是菜单
  // },
  // {
  //   path: '/home',
  //   component: () => import('../views/homePage/home.vue'),
  //   hide: true    // 不是菜单
  // },
  {
    path: '/inshfaq',
    component: () => import('../views/HSBCChat/HSBCChat.vue'),
    hide: true    // 不是菜单
  },
  // 布局
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/home',     //重定向
//     meta: { title: '后台首页' },
//     children: [
//       {
//         path: '/home',
//         component: () => import('@/views/home/Home')
//       }
//     ]
//   },
]

// 公共路由添加
const createRouter = () => new Router({ 
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes 
})

const router = createRouter()

export function resetRouter(){
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}
 
export default router    // 默认导出


//动态路由
// export const dynamicRoutes = [
//   // 用户管理
//   {
//     path: '/user',
//     component: Layout,
//     redirect: '/user/userInfo',
//     meta: { title: '用户管理', roles: '', icon: 'el-icon-document' },    
//     children: [
//       {
//         path: '/user/userInfo',
//         meta: { title: '用户列表', roles: '' },
//         component: () => import('../views/manageView/user/user')
//       },
//     ]
//   },
//   // 编号管理
//   {
//     path: '/access',
//     component: Layout,
//     redirect: '/access/accessInfo',
//     meta: { title: '编号管理', roles: '', icon: 'el-icon-s-shop' },
//     children: [
//       {
//         path: '/access/accessInfo',
//         meta: { title: '编号列表', roles:'' },
//         component: () => import('../views/manageView/access/access')
//       },
//     ]
//   },
//   // 
//   {
//     path: '/config',
//     component: Layout,
//     redirect: '/config/configInfo',
//     meta: { title: '配置管理', roles: '', icon: 'el-icon-s-shop' },
//     children: [
//       {
//         path: '/config/configInfo',
//         meta: { title: '配置列表' },
//         component: () => import('../views/manageView/config/config')
//       }
//     ]
//   },
//   // {
//   //   path: '/error404',
//   //   meta: { roles: '' },
//   //   hide: true,
//   //   component: () => import('@/views/error/error.vue')
//   // }
//   // 账号管理
//   // {
//   //   path: '/account',
//   //   component: Layout,
//   //   redirect: '/account/account-list',
//   //   meta: { title: '账号管理', roles: '', icon: 'el-icon-user' },
//   //   children: [
//   //     {
//   //       path: '/account/account-list',
//   //       meta: { title: '账号列表', roles: 'super' },
//   //       component: () => import('@/views/account/AccountList')
//   //     },
//   //     {
//   //       path: '/account/account-add',
//   //       meta: { title: '账号添加', roles: 'super' },
//   //       component: () => import('@/views/account/AccountAdd')
//   //     },
//   //     {
//   //       path: '/account/modify-pwd',
//   //       meta: { title: '修改密码', roles: '' },
//   //       component: () => import('@/views/account/ModifyPassword')
//   //     },
//   //     {
//   //       path: '/account/personal',
//   //       meta: { title: '个人中心', roles: '' },
//   //       component: () => import('@/views/account/Personal')
//   //     },
//   //   ]
//   // },
  
// ]
 
 
