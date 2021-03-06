import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Results from '@/components/Results';
import Truckie from '@/components/Truckie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/results',
      name: 'results',
      component: Results,
    },
    {
      path: '/truckie',
      name: 'truckie',
      component: Truckie,
    },
  ],
});
