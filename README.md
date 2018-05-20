# webpack 4 使用指南
  这是一个用 `webpack 4.5` 版本制作的 webpack 基础功能包。 <br>
  包含了项目中一些常用的功能和插件，并配有注释。 <br>
  如果你需要了解和学习下 webpack 的配置，不妨打开它看看，一个完整的配置包，应该会对你有所帮助。 <br>
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
    `npm start` 打开 `webpack-dev-server` 打开 `http://localhost:8018/` 访问
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
    |──.babelrc               #babel配置文件
    |──.gitignore             #git忽略配置文件
    |──package-lock.json
    |──package.json
    |──postcss.config.js      #postcss配置文件
    |──README.md
    └──webpack.config.js      #webpack配置文件
```


如果你都看到这里了...  给个Star呗~
