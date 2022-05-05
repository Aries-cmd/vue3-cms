import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/home',
    component: () => import('views/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((router) => {
  if (router.path !== '/login') {
    const token = localStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      return '/home'
    }
  }
})

export default router
