const path = require("path");
const resolve = (dir) => {
    return path.join(__dirname, dir);
};


module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("src"))
            // 在已有的svg loader配置中 排除掉对src/icons里svg进行转换
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons')) // 排除掉src/icons目录
            .end()
            // svg icon工作原理 https://segmentfault.com/a/1190000015367490
            // 配置svg-sprite-loader
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons')) // 指定src/icons要处理svg的文件目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader') // 用svg-sprite-loader解析
            .options({
                symbolId: 'icon-[name]' // symbol id命名格式 icon-图标名称
            })
            .end()
    },

    devServer: {
		open:true,
        port: 8080,
        disableHostCheck: true,
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({ // 解决适配问题 px -> viewport
                        unitToConvert: "px",
                        viewportWidth: 750,
                        unitPrecision: 3,
                        propList: [
                            "*"
                        ],
                        viewportUnit: "vw",
                        fontViewportUnit: "vw",
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                ]
            }
        }
    }
}
