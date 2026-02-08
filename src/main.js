import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { Offcanvas, Popover, Tooltip, ScrollSpy } from 'bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import 'vue3-toastify/dist/index.css';
import 'flatpickr/dist/flatpickr.min.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import VueFeather from 'vue-feather';
import Flatpickr from 'vue-flatpickr-component';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import English from './core/locales/en.json';
import لعربية from './core/locales/ae.json';
import router from './router';
const messages = {
    English,
    لعربية,
};
const i18n = createI18n({
    legacy: false,
    locale: 'English',
    fallbackLocale: 'English',
    messages,
});
const app = createApp(App);
// Bootstrap directives
app.directive('popover', {
    mounted(el) {
        new Popover(el);
    },
});
app.directive('tooltip', {
    mounted(el) {
        new Tooltip(el);
    },
});
app.directive('offcanvas', {
    mounted(el) {
        Offcanvas.getOrCreateInstance(el);
    },
});
app.directive('scrollspy', {
    mounted(el, binding) {
        const options = binding.value || {};
        new ScrollSpy(el, options);
    },
});
const head = createHead();
app
    .use(createPinia())
    .use(router)
    .use(i18n)
    .component(VueFeather.name, VueFeather)
    .component('Flatpickr', Flatpickr)
    .component('Swiper', Swiper)
    .component('SwiperSlide', SwiperSlide)
    .component('OverlayScrollbars', OverlayScrollbarsComponent);
app.use(head);
app.mount('#app');
