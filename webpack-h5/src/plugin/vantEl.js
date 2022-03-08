// 把想用的组件写在这就行了
import {
    Button,
    Form,
    Field,
    CellGroup,
    Notify,
    Tab,
    Tabs,
    Toast
} from 'vant'
import '../../node_modules/vant/lib/index.css';

export default (app) => {
    const components = [
        Button,
        Form,
        Notify,
        Tab,
        Tabs,
        Field,
        CellGroup,
        Toast
    ]

    components.forEach(com => {
        app.use(com)
    })

    app.config.globalProperties.$toast = Toast
}