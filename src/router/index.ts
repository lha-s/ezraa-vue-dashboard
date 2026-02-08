import { createRouter, createWebHistory } from 'vue-router';
import { defineComponent, h } from 'vue';

import Auth from '@/components/layout/auth/Auth.vue';
import LoginPage from '@/components/layout/auth/LoginPage.vue';
import Body from '@/layout/Body.vue';
import DashboardHome from '@/pages/dashboard/DashboardHome.vue';
import SamplePage from '@/pages/sample/SamplePage.vue';

// Placeholder component for routes that don't have pages yet
const ComingSoon = defineComponent({
  name: 'ComingSoon',
  setup() {
    return () =>
      h('div', { class: 'container-fluid' }, [
        h('div', { class: 'row' }, [
          h('div', { class: 'col-12' }, [
            h('div', { class: 'card' }, [
              h('div', { class: 'card-body text-center py-5' }, [
                h('h4', { class: 'mb-3' }, 'Coming Soon'),
                h('p', { class: 'text-muted' }, 'This page is under development.'),
              ]),
            ]),
          ]),
        ]),
      ]);
  },
});

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
          title: 'Home | Ezraa',
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
      // Company view catch-all routes (pages not yet built)
      {
        path: 'c/plants/:pathMatch(.*)*',
        name: 'plants',
        component: ComingSoon,
        meta: { title: 'Order Plants | Ezraa' },
      },
      {
        path: 'c/carbon/:pathMatch(.*)*',
        name: 'carbon',
        component: ComingSoon,
        meta: { title: 'Carbon Accounting | Ezraa' },
      },
      {
        path: 'c/esg/:pathMatch(.*)*',
        name: 'esg',
        component: ComingSoon,
        meta: { title: 'ESG | Ezraa' },
      },
      {
        path: 'c/reports/:pathMatch(.*)*',
        name: 'reports',
        component: ComingSoon,
        meta: { title: 'Sustainability Report | Ezraa' },
      },
      {
        path: 'c/geo/:pathMatch(.*)*',
        name: 'geo',
        component: ComingSoon,
        meta: { title: 'Geospatial Monitoring | Ezraa' },
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
