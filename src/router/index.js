import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../views/ListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView,
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('../views/NoteView.vue'),
    },
  ],
});

export default router;
