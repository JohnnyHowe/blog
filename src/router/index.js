import { createRouter, createWebHistory } from 'vue-router'
import BlogPage from '../views/BlogPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blogs/:title',
      name: 'blog-page',
      component: BlogPage
    },
  ]
})

export default router
