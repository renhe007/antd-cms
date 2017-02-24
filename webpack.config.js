var path = require('path');
var webpack = require('webpack');
var mainURL = path.resolve(__dirname, './index.jsx')
module.exports = {
  entry: {
    'webpack-dev-server/client?http://localhost:4000':'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/dev-server':'webpack/hot/dev-server',
    'app': mainURL,
    "vendor1": ["react", "react-router","antd"],
 },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    publicPath: "http://localhost:4000/build/"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor1"],
      minChunks: Infinity
    })
  ],
  resolve:{
    extensions:['','.js','.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    historyApiFallback: true,
    hot: true,
    progress: true
  },

};
