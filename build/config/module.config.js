// 抽取 CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    rules: [{
        test: /\.js$/,
        // 去掉不需要转换的包
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                // Save disk space when time isn't as important
                cacheCompression: true,
                compact: true,
            }
        }
    }, {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
        }, {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                // modules: true // 开启 CSS Module
            }
        },
            'postcss-loader',
        ],
    }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
            // 将图片转义为 base64 代码，写到 js 中 -- 针对小图片 依赖 file-loader, 减少 http 请求
            loader: 'url-loader',
            options: {
                esModule: false,
                // 表示小于 10kb 的图片转为 base64 DataURI, 否则不转义，生成新的图片文件（避免大图片导致 js 过大，加载 js 时间长）
                limit: 10000,
                name: '[name].[hash:6].[ext]', // [name]、[ext] => placeholder 占位符
            }
        }]
    }, {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
            loader: 'file-loader',
        }],
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{
            loader: 'html-loader',
            options: {
                attrs: ['img:src', 'link:href']
            },
        }],
    }]
};
