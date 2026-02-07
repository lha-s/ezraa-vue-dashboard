import type { Menu } from '@/types/menu';

export const menuItems: Menu[] = [
  {
    main_title: 'general',
  },
  {
    title: 'dashboard',
    id: 'dashboard',
    icon: 'home',
    type: 'link',
    path: '/dashboard',
    active: true,
    level: 1,
  },
  {
    main_title: 'pages',
  },
  {
    title: 'sample_page',
    id: 'sample-page',
    icon: 'file-text',
    type: 'link',
    path: '/sample-page',
    active: false,
    level: 1,
  },
];
