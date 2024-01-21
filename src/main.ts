// import './assets/main.css'
import './assets/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import route from './router';
import { createPinia } from 'pinia';

const vueApp = createApp(App);
const pinia = createPinia();

vueApp.use(route);
vueApp.use(pinia);

vueApp.mount("#app");
