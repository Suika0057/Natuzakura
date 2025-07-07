import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayOut/MainLayOut.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/components/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
