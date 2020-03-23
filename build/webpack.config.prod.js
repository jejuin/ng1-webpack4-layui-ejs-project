/**
 * webpack 生产环境配置
 */

const merge = require('webpack-merge');
// CSS 压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 在每次构建前 remove/clean your build folder(s)
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 压缩 js 需使用 1.x 版本，高版本解析 es6 代码存在问题
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.base');

const options = {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js',
    },
    // 最佳实践
    devtool: 'source-map',
    plugins: [
        // 在每次构建前 remove/clean your build folder(s) —— dev 环境下可不使用
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                // 使用多进程并行运行可提高构建速度
                parallel: true,
                // 开启 sourceMap
                sourceMap: true,
                uglifyOptions: {
                    // 启用IE8支持
                    ie8: true,
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    compress: {
                        // 清除所有console.log调用
                        drop_console: true,
                        // 清除 debugger 语句
                        drop_debugger: true,
                        // 不将引号属性查询转换成点号形式 e['default'] -> e.default
                        properties: false,
                    }
                },
            })
        ]
    }
};

module.exports = merge(common, options);
