import { createRouter, createWebHashHistory } from 'vue-router'

const asyncRoutes = [{
    path: '/',
    component: import ( /*webpackChunkName: 'home'*/ '@/views/home/index.vue')
}, {
    path: '/form',
    component: import ( /*webpackChunkName: 'form'*/ '@/views/formPage/index.vue')
}]
const routes = [...asyncRoutes]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router