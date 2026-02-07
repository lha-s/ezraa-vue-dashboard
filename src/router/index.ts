import { createRouter, createWebHistory } from 'vue-router';

import Auth from '@/components/layout/auth/Auth.vue';
import LoginPage from '@/components/layout/auth/LoginPage.vue';
import Body from '@/layout/Body.vue';
import DashboardHome from '@/pages/dashboard/DashboardHome.vue';
import SamplePage from '@/pages/sample/SamplePage.vue';

const routes = [
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
        meta: {
          title: 'Login | Ezraa Dashboard',
        },
      },
    ],
  },
  {
    path: '/',
    component: Body,
    children: [
      {
        path: '',
        redirect: '/dashboard',
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardHome,
        meta: {
          title: 'Dashboard | Ezraa',
        },
      },
      {
        path: 'sample-page',
        name: 'sample-page',
        component: SamplePage,
        meta: {
          title: 'Sample Page | Ezraa',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const user = localStorage.getItem('user');

  if (to.name === 'login') {
    if (user) {
      next({ name: 'dashboard' });
    } else {
      next();
    }
  } else {
    if (!user) {
      next({ name: 'login' });
    } else {
      next();
    }
  }
});

export default router;
