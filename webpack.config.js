const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


//CSS打包出来的东西重复了！！


module.exports = {
    //entry为入口,webpack从这里开始编译
    //entry写为对象形式是多入口打包
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
    //filename前面加[name]/可打包出分开的文件夹
    output: {
        path: path.join(__dirname, './bundle'),
        filename: '[name]/[name].bundle.[hash:8].js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    //module是配置所有模块要经过什么处理
    //css-loader可以使用css modules
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            },{
                test: /\.less$/,
                exclude: /src\/common/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader', 'less-loader']
                })
            },{
                test: /\.less$/,
                include: /src\/common/,
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
        //想出多个页面就 new 多个htmlWebpackPlugin 及对应的文件位置 配置chunks确定引入什么模块
        new htmlWebpackPlugin({
            filename: "index.html", //生成html的名字
            template: path.join(__dirname , "./src/index.html"),  //模板页面
            chunks: []  //打包什么东西
        }),
        new htmlWebpackPlugin({
            filename: "routerPage/index.html",
            template: path.join(__dirname , "src/routerPage/index.html"), 
            chunks: ['routerPage', 'js/vendor', 'js/common']
        }),
        new htmlWebpackPlugin({
            filename: "reduxPage/index.html",
            template: path.join(__dirname , "src/reduxPage/index.html"), 
            chunks: ['reduxPage', 'js/vendor', 'js/common']
        }),
        new ExtractTextPlugin({
            filename: '[name]/[name].[hash:8].css'
        }),
        new ExtractTextPlugin({
            filename: 'css/common.[hash:8].css'
        }),
        new CleanWebpackPlugin(['bundle'])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'js/vendor',
                    chunks: 'all'
                },
                utils: {
                    test: /[\\/]common[\\/]js[\\/]/,
                    name: 'js/common', 
                    chunks: 'initial',
                    minSize: 0
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