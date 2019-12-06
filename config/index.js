'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
let env = process.argv.splice(2)[0] || 'prod';
let prodPublicPath = (env == 'prod' ? 'https://cdnqiniu.51jinke.com/kinkr-h5/' : './');
let filePath = (env == 'prod' ? '../dist/prod' : '../dist/test');
if (env == 'dev') {
    filePath = "../dist/dev"
}

//prodPublicPath  build.assetsPublicPath 编译之后static目录路径
//filePath        build.assetsRoot       编译之后文件存放目录
console.log(env, prodPublicPath, filePath)
module.exports = {
    arr: [

        '/index/index',
    ],
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/lib': {
                target: 'https://m.51jinke.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/lib': '/lib'
                }
            },
            '/api': {
                // target: '192.168.1.128:3100',
                target: 'http://m.kinkr.cn',
                // target: 'http://7nb.com.cn',
                // target : 'http://test.7nb.com.cn',
                // target: 'https://m.51jinke.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/wechat': {
                //target: 'http://192.168.1.112:4500',
                target: 'http://m.kinkr.cn',
                // target: 'http://7nb.com.cn',
                //target : 'http://test.7nb.com.cn',
                //target : 'https://51jinke.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/wechat': '/wechat'
                }
            }
        },
        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: false,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        // 打包.map文件
        cssSourceMap: false
    },
    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, filePath),
        assetsSubDirectory: 'static',

        // build的时候需要使用相对路径
        // assetsPublicPath: 'http://cdn.51jinke.com/jinke-h5/',
        // assetsPublicPath: '/',

        assetsPublicPath: prodPublicPath,


        /**
         * Source Maps
         */

        //  打包.map文件 map方便调试
        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}