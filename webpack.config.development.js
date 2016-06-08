/* eslint max-len: 0 */
import path from 'path'
import webpack from 'webpack'
import baseCfg from './webpack.config.base'

const config = {
  ...baseCfg,

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    path.resolve(__dirname, 'app/renderer/renderer.js')
  ],

  output: {
    ...baseCfg.output,
    publicPath: 'http://localhost:3000/dist/renderer'
  },

  module: {
    ...baseCfg.module,
    loaders: [
      ...baseCfg.module.loaders,
      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },

  plugins: [
    ...baseCfg.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],

  target: 'electron-renderer'
}

export default config
