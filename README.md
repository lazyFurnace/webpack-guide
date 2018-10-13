# webpack 4 使用指南
  这是一个用 `webpack 4.5` 版本制作的 webpack 基础功能包。 <br>
  包含了项目中一些常用 Webpack 功能和插件，并配有注释。 <br>
  如果你需要了解和学习下 Webpack 的配置，不妨打开它看看，一个完整的配置包，应该会对你有所帮助。 <br>
  推荐配合我在掘金的文章一起看 [文章链接](https://juejin.im/post/5ad1ef5d518825556534f137) <br>
### 功能简介
  `babel-preset-env`转义ES6+ <br>
  `babel-polyfill`ES6+辅助转化器 <br>
  `postcss` CSS添加前缀 <br>
  `css modules` 模块化 <br>
   HTML、CSS文件生成插件 <br>
   多页面打包 <br>
   公共库提取 <br>
   公共代码提取 <br>
   React、Less配置等...
 ### 如何使用
   下载项目后 `npm install` 安装完整项目 <br>
   `npm build` 打包生成文件 <br>
   `npm start` 开启 `webpack-dev-server` <br> 
   打开 `http://localhost:8018/` 访问
 ### 目录结构
 ```
   webpack-guide
    |──bundle                 #打包生成文件
        |──common             └──#所有公共代码
              |──common.css
              |──common.js
              |──vendor.js
        |──reduxPage
        |──routerPage
        |──index.html
    |──node_modules
    |──src                    #源码文件
        |──common             └──#公共代码
              |──css
              |──js
        |──reduxPage
        |──routerPage
        |──index.html
        |──index.js
    |──.babelrc               #babel配置文件
    |──.gitignore             #git忽略配置文件
    |──package-lock.json
    |──package.json
    |──postcss.config.js      #postcss配置文件
    |──README.md
    └──webpack.config.js      #webpack配置文件
```

有什么问题或者想说的欢迎来 [这里](https://github.com/liqiUser/webpack-guide/issues) <br>
如果你都看到这里了...  给个Star呗~

----2018.07.15----

热加载设置 <br>
`webpack.config.js` 中的 `devServer` 加入 `hot: true` <br>
`entry` 入口添加 `webpack/hot/only-dev-server` 开启热加载 <br>
需要热加载的页面加入 
```
if (module.hot) {
    module.hot.accept();
}
```
开启热加载, **注意这种配置下只有首页可以热模块加载 其他的页面不行**

----2018.07.16----

加上 `source-map` 能看清楚错误在哪个文件 <br>
`devtool: 'source-map'`
