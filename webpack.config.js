const appFolder = 'app';

const pluginsList = [];

module.exports = {
  entry: `./${appFolder}/client.js`,
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  watch: false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: pluginsList
};
