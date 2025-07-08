import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import locale_config from '@/locale/cfg.js'


createApp(App).use(router).use(locale_config).mount('#app')
