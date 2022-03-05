// 把想用的组件写在这就行了
import { Button, Form, Notify, Tab, Tabs } from 'vant'
import '../../node_modules/vant/lib/index.css';

export default (app) => {
	const components = [
		Button,
		Form,
		Notify,
		Tab,
		Tabs
	]

	components.forEach(com => {
		app.use(com)
	})
}
