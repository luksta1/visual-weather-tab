/* eslint-disable */
const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: [
    path.resolve('./src/index.js')
  ],
  output: {
    path: path.resolve('./build/'),
    filename: 'app.js',
    publicPath: '.'
  },
  module: {
    loaders: [
      {
        test: /\.jsx/,
        include: path.resolve('./src/components/'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader?importLoaders=1',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
