import { createRouter, createWebHistory } from 'vue-router';
import StrategyPattern from '@/views/StrategyPattern.vue';
import BuilderPattern from '@/views/BuilderPattern.vue';
import HumbleComponentsPattern from '@/views/HumbleComponentsPattern.vue';
import DebounceSearch from '@/views/DebounceSearch.vue';

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
  {
    path: '/humble-components-pattern',
    name: 'HumbleComponentsPattern',
    component: HumbleComponentsPattern,
  },
  {
    path: '/debounce-search',
    name: 'DebounceSearch',
    component: DebounceSearch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
