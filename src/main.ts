import "./scss/base.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(createPinia())
app.use(router)

app.mount('#app')
