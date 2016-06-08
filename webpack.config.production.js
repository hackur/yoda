import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import baseCfg from './webpack.config.base'

const config = [{
  ...baseCfg,

  devtool: 'source-map',

  entry: path.resolve(__dirname, 'app/renderer/renderer.js'),

  output: {
    ...baseCfg.output,
    publicPath: '../dist/'
  },

  module: {
    ...baseCfg.module,

    loaders: [
      ...baseCfg.module.loaders,

      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        )
      }
    ]
  },

  plugins: [
    ...baseCfg.plugins,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ],

  target: 'electron-renderer'
}, {
  ...baseCfg,

  devtool: 'source-map',

  entry: path.resolve(__dirname, 'app/browser/browser.js'),

  output: {
    ...baseCfg.output,
    path: path.join(__dirname, 'dist/browser'),
    filename: './browser.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin(
      'require("source-map-support").install();',
      { raw: true, entryOnly: false }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  target: 'electron-main',

  node: {
    __dirname: false,
    __filename: false
  },

  externals: [
    ...baseCfg.externals,
    'source-map-support'
  ]
}]

export default config
