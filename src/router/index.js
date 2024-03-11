import { createRouter, createWebHistory } from 'vue-router';
import NoteList from '@/views/NoteList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: NoteList,
    },
    {
      path: '/note/:id',
      name: 'note',
      component: () => import('../views/NoteDetails.vue'),
    },
  ],
});

export default router;
