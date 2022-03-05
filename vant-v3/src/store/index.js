import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import init from './module/init'
import getters from "./getters";
// vuex store持久化 默认使用localstorage持久化
const persisteAppState = createPersistedState({
	storage: window.sessionStorage, // 指定storage 也可自定义
	key: 'vuex_app', // 存储名 默认都是vuex 多个模块需要指定 否则会覆盖,
	paths: ['init.test'] // 通过点连接符指定state路径

})
export default createStore({
	plugins: [
		persisteAppState
	],
	getters,
	modules: { // 注册模块
		init
	},
});




