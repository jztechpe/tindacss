const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production'; // TODO: Check right enviroment.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "app.js",
    clean: true,
  },

  devServer: {
    hot: true,
    watchOptions: { 
      aggregateTimeout: 300, 
      poll: true 
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          name: '[name].[ext]',
        },
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isDevelopment ? '[name].css' : '[name].[hash].min.css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].min.css'
    }),
  ],
};
