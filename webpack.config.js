const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  output: {
	path: `${__dirname}/_site/assets`,
	filename: 'bundle.js',
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