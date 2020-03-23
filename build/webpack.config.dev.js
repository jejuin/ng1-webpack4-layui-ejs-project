/**
 * webpack 开发环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.base');
const path = require('path');

const options = {
    mode: 'development', // 不压缩代码
    output: {
        filename: '[name].[hash:8].js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        hotOnly: true, // 即便 HMR 未生效，也不让浏览器自动刷新
        // 默认端口 8080
        port: '8080',
        // 默认ip localhost
        // 设置为0.0.0.0 既可以通过localhost、127.0.0.1、也可以通过内网ip来访问
        host: '0.0.0.0',
        // 启动成功后，会打开浏览器
        // open: true,
        // 在浏览器上全屏显示编译的 errors 或 warnings
        overlay: {
            errors: true
        },
    },
    plugins: [
        // 简称 HMR,实现模块热替换
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        usedExports: true,
    }
};

module.exports = merge(common, options);

