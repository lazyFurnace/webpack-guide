const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry为入口,webpack从这里开始编译
    entry: [
        "babel-polyfill",
        path.join(__dirname, './src/index.js')
    ],
    //output为输出 path代表路径 filename代表文件名称
    output: {
        path: path.join(__dirname, './bundle'),
        filename: 'bundle.js'
    },
    //module是配置所有模块要经过什么处理
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            },{
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",  //打包后的文件名
            template: path.join(__dirname , "./src/index.html")  //要打包文件的路径
        })
    ],
    mode: 'development',
    devtool: ''
};