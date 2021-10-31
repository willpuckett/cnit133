const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
	  app: './src/js/app.js',
	  jquery: './src/js/jquery.js'
	},
  mode: 'development',
  output: {
	filename: '[name].bundle.js',
	path: `${__dirname}/_site/assets`,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
	rules: [
	  {
		test: /\.css$/,
		use: [
		  MiniCssExtractPlugin.loader,
		  'css-loader',
		],
	  },
	  {
		test: /\.(svg|gif|png|eot|woff|ttf)$/,
		use: [
		  'url-loader',
		],
	  },
	],
},
optimization: {
	minimizer: [
	  // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
	  `...`,
	  new CssMinimizerPlugin(),
	],
  },
};