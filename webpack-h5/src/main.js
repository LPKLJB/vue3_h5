import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installVant from './plugin/vantEl'
// svg icon
import initSvgIcon from '@/icons/index'

createApp(App).use(installVant).use(initSvgIcon).use(store).use(router).mount('#app')