import './assets/main.css'
import { createPinia } from 'pinia'
import { setupCalendar } from "v-calendar";
import { createApp } from 'vue'
import route from "./router"
import App from './App.vue'

const app = createApp(App);
app.use(createPinia());
app.use(route);
app.use(setupCalendar, {});
app.mount('#app');
