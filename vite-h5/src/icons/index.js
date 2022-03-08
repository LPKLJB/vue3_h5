import SvgIcon from '@/components/SvgIcon/index.vue'

// 使用require.context 加载./svg目录下所有svg文件
const files = import.meta.globEager("./svg/*.svg")

export default (app) => {
    app.component('svg-icon', SvgIcon)
}
