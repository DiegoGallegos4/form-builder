
var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');

function _isVendor(module) {
  if (typeof userRequest !== 'string') {
    return false;
  }
  return  userRequest.indexOf('/node_modules/') >= 0  
} 

module.exports = {
  devtool: "source-map",
  entry: {
    index:  __dirname + '/src/index.js',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    filename: '[chunkhash].[name].js',
    path: __dirname + "/dist"
  },
  watch: true,
  module: {
    rules: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},

      {
        test: /^((?!\.module).)*css$/, 
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.module.css$/,
        use: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
      },
      {test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'},
      // {test: /\.svg$/, loader: 'svg-loader?pngScale=2'},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            'file?hash=sha512&digest=hex&name=/[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
       context: __dirname,
       debug: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest'],
      minChunks: function(module, count){
        _isVendor(module);
      }
    }),
  ]
}