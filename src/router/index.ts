import { createRouter, createWebHistory } from 'vue-router';
import PostView from '../views/PostsView.vue';
import LoginRouter from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginRouter
    }
   
  ]
})

export default router;
