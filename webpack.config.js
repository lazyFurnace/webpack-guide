const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //entry为入口,webpack从这里开始编译
    entry:{
        reduxPage: [
            "babel-polyfill", 
            path.join(__dirname, './src/reduxPage/index.js')
        ],
        routerPage: [
            "babel-polyfill",
            path.join(__dirname, './src/routerPage/index.js')
        ]
    },
    //output为输出 path代表路径 filename代表文件名称
    output: {
        path: path.join(__dirname, './bundle'),
        filename: '[name]/[name].bundle.[hash:8].js',
        chunkFilename: '[name].[chunkhash:8].js'
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader', 'less-loader']
                })
            },{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",  //打包后的文件名
            template: path.join(__dirname , "./src/index.html"),  //要打包文件的路径
            chunks: []
        }),
        new htmlWebpackPlugin({
            filename: "routerPage/index.html",  //打包后的文件名
            template: path.join(__dirname , "src/routerPage/index.html"),  //要打包文件的路径
            chunks: ['routerPage', 'common']
        }),
        new htmlWebpackPlugin({
            filename: "reduxPage/index.html",  //打包后的文件名
            template: path.join(__dirname , "src/reduxPage/index.html"),  //要打包文件的路径
            chunks: ['reduxPage', 'common']  //对应关系
        }),
        new ExtractTextPlugin({
            filename: '[name]/[name].index.[hash:8].css'
        }),
        new CleanWebpackPlugin(['bundle'])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'bundle'),  //启动路径
        host:'localhost',  //域名
        port: 8018,  //端口号
    },
    mode: 'development',
    devtool: ''
};