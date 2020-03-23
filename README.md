# 介绍
Angular1.2.30 + Webpack4 + EJS + Babel + Layui 多页面项目 Demo，兼容IE8。

>如果该 DEMO 对你有所帮助，还请给个 Star 哟~，如果有问题欢迎提 Issues 交流。

## 技术栈
 1. JavaScript 框架：Angular1.2.30
 2. UI 框架： Layui
 3. 构建工具：Webpack4
 4. 模版语言：EJS
 5. ES6(+)代码处理：Babel
 6. JavaScript 库：jQuery 1.12.4
 7. CSS 前缀处理：postcss
 8. 代码规范：eslint

## 目录结构
    # DEMO
    |    |-- build                          # 存放构建相关文件
    |    |-- dist                           # 打包后生成的代码
    |    |-- dll                            # 存放 DllPlugin 打包生成代码
    |    |-- node_modules                   # 存放所有的依赖包
    |    |-- src                            # 源代码
    |    |-- .babelrc                       # babel 配置文件
    |    |-- .eslintrc.js                   # ESLint 配置文件
    |    |-- postcss.config.js              # postcss 配置文件               

## Install 
在根目录下，打开命令行（cmd 终端），执行命令 `npm install` ，初始化 `node_modules`<br>
如果初始化失败，可解压 `node_modules.7z`

## Run
执行 `npm run dev` 命令，启动项目

## Build
执行 `npm run build` 命令，打包项目


