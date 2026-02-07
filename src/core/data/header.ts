import type { Language, Notification, SocialLink, Profile } from '@/types/header';
import { baseUtils } from '@/utils';

const { getImage } = baseUtils();
export const notice: string[] = [
  `<img src="${getImage('giftools.gif')}" alt="gif">
      <h6 class="mb-0 f-w-400"><span class="font-primary">Don't Miss Out! </span><span class="f-light">Our new update has been released.</span></h6><i class="icon-arrow-top-right f-light"></i>`,
  `<img src="${getImage('giftools.gif')}" alt="gif">
      <h6 class="mb-0 f-w-400"><span class="f-light">Something you love is now on sale! </span></h6><a class="ms-1" href="https://1.envato.market/3GVzd" target="_blank">Buy now !</a>`,
];
export const language: Language[] = [
  {
    id: 1,
    name: 'English',
    code: 'en',
    icon: 'us',
    country_code: 'US',
    active: true,
  },
  {
    id: 2,
    name: 'لعربية',
    code: 'ae',
    icon: 'ae',
    country_code: 'ae',
  },
];
export const notification: Notification[] = [
  {
    id: 1,
    message: 'Delivery processing',
    border_color: 'primary',
  },
  {
    id: 2,
    message: 'Order Complete',
    border_color: 'success',
  },
  {
    id: 3,
    message: 'Tickets Generated',
    border_color: 'secondary',
  },
  {
    id: 4,
    message: 'Delivery Complete',
    border_color: 'warning',
  },
];
export const profile: Profile[] = [
  {
    id: 1,
    title: 'Account',
    icon: 'user',
    path: '/dashboard',
  },
  {
    id: 2,
    title: 'Settings',
    icon: 'settings',
    path: '/dashboard',
  },
];
export const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: 'fa-brands fa-linkedin-in',
    url: 'https://www.linkedin.com/login',
  },
  {
    id: 2,
    icon: 'fa-brands fa-x-twitter',
    url: 'https://twitter.com/login?lang=en',
  },
  {
    id: 3,
    icon: 'fa-brands fa-facebook-f',
    url: 'https://www.facebook.com/',
  },
  {
    id: 4,
    icon: 'fa-brands fa-google',
    url: 'https://www.google.com/',
  },
];
