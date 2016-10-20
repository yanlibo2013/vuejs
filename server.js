// -- react hot replace

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
config.entry.unshift('webpack-dev-server/client?http://localhost:4000', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

//启动服务
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    stats: { colors: true},  //打包输出时带颜色
    proxy: {
        '/api/*': {
            target: 'http://localhost:3001',
            secure: false
        },
        '/qm/*': {
            target: 'http://localhost:3001',
            secure: false
        }
    }
}).listen(4000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    };
    console.log('-- html dev server running at localhost:4000');
});
