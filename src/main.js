import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {showToast} from "@/components/pages/ToastifySuccess.js";
const app = createApp(App)


app.use(router)
app.config.globalProperties.$toast = showToast;
app.mount('#app')
