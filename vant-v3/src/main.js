import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import installVant from './plugin/vantEl'
import router from './router'

createApp(App).use(installVant).use(router).mount('#app')
