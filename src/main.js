import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router'

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Toolbar from "primevue/toolbar";
import Sidebar from "primevue/sidebar";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .component('pv-toolbar', Toolbar)
    .component('pv-sidebar', Sidebar)
    .mount('#app')
