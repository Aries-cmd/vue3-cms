import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/main.vue'),
    redirect: '/main/analysis/overview'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
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
