import path from 'path';

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist/renderer'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    root: [
      path.resolve('node_modules'),
      path.resolve('./app/renderer')
    ],
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [

  ],
  externals: [

  ]
};
