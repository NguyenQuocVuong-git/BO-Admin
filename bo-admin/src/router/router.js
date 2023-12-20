// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import lodash from 'lodash'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import store from '../store/store';

const routes = [
  { path: '/', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
   const { user } = store.getters
   if (to.matched.some((record) => record.meta.requiresAuth) && lodash.isEmpty(user)) {
    next('/login');
  } else {
    next();
  }
});

export default router;
