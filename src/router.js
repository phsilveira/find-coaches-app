import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachsList from './pages/coaches/CoachsList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';


const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachsList},
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default routes;
