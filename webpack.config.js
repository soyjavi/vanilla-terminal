const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', './src/VanillaTerminal.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'vanilla-terminal.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-class-properties'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
};
