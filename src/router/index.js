import { createRouter, createWebHistory } from 'vue-router';
import NoteList from '@/views/NoteList';
import NoteDetails from '@/views/NoteDetails';

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
      component: NoteDetails,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});

export default router;
