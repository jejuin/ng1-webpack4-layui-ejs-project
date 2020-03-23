// 抽取 CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 创建 HTML 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 给页面添加额外的资源
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
// 拷贝文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (template) => {
    const plugins = [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../../src/assets'),
            to: 'assets',
        }]),
    ];

    return (() => {
        for (const [key, value] of Object.entries(template)) {
            plugins.push(
                new HtmlWebpackPlugin({
                    filename: `${key}.html`,
                    template: value,
                    chunks: ['vendors', 'common', key.replace('views/', '')],
                    // 页面参数
                    templateParameters: {}
                })
            );
        }

        plugins.push(new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../../dll/vendors.dll.js')
        }));

        plugins.push(new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../../dll/vendors.manifest.json')
        }))

        return plugins;
    })();
};