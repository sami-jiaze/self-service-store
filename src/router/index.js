import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '无人售卖 主页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/userInfo',
    component: (resolve) => require(['@/views/dashboard/index.vue'], resolve),
    meta: {
      title: '个人主页'
    },
    children: [
      {
        path: 'stock',
        name: 'Stock',
        component: (resolve) => require(['@/views/dashboard/stock/index.vue'], resolve),
        meta: { title: '总库存管理' }
      },
      {
        path: 'supplier',
        name: 'supplier',
        component: (resolve) => require(['@/views/dashboard/supplier/index.vue'], resolve),
        meta: { title: '供应商推荐' }
      },
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/dashboard/overview'),
        meta: { title: '总览' }
      },
      {
        path: 'salesView',
        name: 'salesView',
        component: () => import('@/views/dashboard/salesView'),
        meta: { title: '交易记录' }
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/dashboard/categories'),
        meta: { title: '商品分类管理' }
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('@/views/dashboard/userInfo'),
        meta: { title: '个人中心' }
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/index.vue'),
    meta: {
      title: '加入我们'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '无人售卖 主页'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
