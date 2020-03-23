const path = require('path');
const webpack = require('webpack');
// 压缩 js 需使用 1.x 版本，高版本解析 es6 代码存在问题
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        vendors: ['jquery', 'angular'],
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dll'),
        library: '[name]' // 全局变量：暴露打包生成的文件
    },
    plugins: [
        // 分析第三方库，将分析结果（映射关系）打包到 manifest.json 中
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../dll/[name].manifest.json'),
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                // 使用多进程并行运行可提高构建速度
                parallel: true,
                // 开启 sourceMap
                // sourceMap: true,
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
