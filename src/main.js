import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import './assets/main.css'

import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';



const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
