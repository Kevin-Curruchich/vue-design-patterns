import { createRouter, createWebHistory } from 'vue-router';
import StrategyPattern from '@/views/StrategyPattern.vue';
import BuilderPattern from '@/views/BuilderPattern.vue';

const routes = [
  {
    path: '/',
    redirect: '/strategy-pattern',
  },
  {
    path: '/strategy-pattern',
    name: 'StrategyPattern',
    component: StrategyPattern,
  },
  {
    path: '/builder-pattern',
    name: 'BuilderPattern',
    component: BuilderPattern,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
