/**
 * webpack 公共配置
 */
const bundle = require('./config/bundle.config');
const modules = require('./config/module.config');
const plugins = require('./config/plugins.config')(bundle.template);
const resolve = require('./config/resolve.config');
const path = require('path');

module.exports = {
    // 入口: 根据哪些文件进行打包
    entry: bundle.entry,
    // 出口：打包输出的文件配置
    output: {
        // 将打包输出的文件放在 dist 文件夹内
        path: path.resolve(__dirname, '../dist'),
        //publicPath: '/'
    },
    resolve,
    module: modules,
    plugins,
    performance: {
        hints: false,
    },
    optimization: {
        splitChunks: {
            // 对所有包进行拆分
            chunks: 'all',
            // 分割一个模块之前必须共享的最小块数
            minChunks: 2,
            cacheGroups: { // 缓存组
                vendors: false,
                default: {
                    name: 'common',
                    minChunks: 20,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    }
};
