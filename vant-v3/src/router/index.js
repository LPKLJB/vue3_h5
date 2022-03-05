import { createRouter, createWebHashHistory } from 'vue-router'

const asyncRoutes = [
	{
		path: '/',
		component: import('../views/home/index.vue')
	}
]
const routes = [...asyncRoutes]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router
