import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCookies from "vue-cookies";

import ElementPlus from "element-plus";

// import "element-plus/dist/index.css";
import "./assets/theme.scss"
import * as ElementPlusIconsVue from "@element-plus/icons-vue";


const app = createApp(App)

app.config.globalProperties.$cookies = VueCookies;
$cookies.config("1d");

app.use(createPinia())
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);

app.mount('#app')
