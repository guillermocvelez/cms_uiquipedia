import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostView
    },
   
  ]
})

export default router;
