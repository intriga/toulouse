import './bootstrap';

import { createApp } from 'vue';

import Home from "./components/Home.vue";

import router from './routes/index'

createApp(Home)
    .use(router)
    .mount('#app')