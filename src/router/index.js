import { createRouter, createWebHistory } from 'vue-router';
import NoteList from '@/views/NoteList';

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
      component: () => import('../views/NoteDetails'),
    },
  ],
});

export default router;
