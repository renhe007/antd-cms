var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = [{
    path: '/',
    target: 'https://localhost:7000',
    host: '127.0.0.1'
}];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    inline:true,
    host: '127.0.0.1',
    target: 'https://localhost:4000',

});

//将其他路由，全部返回index.html
server.app.get('*', function (req,res) {
    res.sendFile(__dirname,'./build/index.html')
});
server.listen(4000);
